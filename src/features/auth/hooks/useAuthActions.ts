import { useState, useCallback } from 'react';
import { supabase } from '../../../lib/supabase';
import { handleAuthError } from '../utils/errorHandler';

export function useAuthActions() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const withLoading = async <T,>(action: () => Promise<T>): Promise<T> => {
    setIsLoading(true);
    setError(null);
    try {
      return await action();
    } catch (err) {
      const errorMessage = handleAuthError(err);
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const login = useCallback((email: string, password: string) => {
    return withLoading(() => 
      supabase.auth.signInWithPassword({ email, password })
        .then(({ error }) => {
          if (error) throw error;
        })
    );
  }, []);

  const signUp = useCallback(({ email, password, name }: { 
    email: string; 
    password: string; 
    name: string; 
  }) => {
    return withLoading(async () => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name } }
      });
      if (error) throw error;
      return !!data.user;
    });
  }, []);

  const resetPassword = useCallback((email: string) => {
    return withLoading(async () => {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      return true;
    });
  }, []);

  const logout = useCallback(() => {
    return withLoading(async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      localStorage.clear();
    });
  }, []);

  return {
    isLoading,
    error,
    login,
    signUp,
    resetPassword,
    logout
  };
}