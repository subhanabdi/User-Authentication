import { useState, useEffect } from 'react';
import { User } from '../../../types/auth';
import { supabase } from '../../../lib/supabase';
import { mapUser } from '../utils/userMapper';

export function useSession() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize session
    const initSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(mapUser(session.user));
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Set up auth state change listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ? mapUser(session.user) : null);
      setIsLoading(false);
    });

    initSession();

    // Cleanup subscription
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { user, isLoading };
}