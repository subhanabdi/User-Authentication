import { useState } from 'react';
import { supabase } from '../../../lib/supabase';

export function usePasswordReset() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/reset-password',
      });
      
      if (error) throw error;
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send reset password email');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { resetPassword, isLoading, error };
}