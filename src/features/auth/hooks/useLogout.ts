import { useState } from 'react';
import { supabase } from '../../../lib/supabase';

export function useLogout() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const logout = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Clear any local storage items
      localStorage.removeItem('supabase.auth.token');
      
      // Sign out from Supabase
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to logout');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { logout, isLoading, error };
}