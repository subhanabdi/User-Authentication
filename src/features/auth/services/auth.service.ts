import { supabase } from '../../../lib/supabase';
import type { AuthResponse, User } from '../types/auth';

export async function signInWithPassword(email: string, password: string): Promise<AuthResponse> {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return { user: mapUser(data.user), session: data.session };
}

export async function signUp(email: string, password: string, name: string): Promise<boolean> {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } }
  });
  if (error) throw error;
  return !!data.user;
}

export async function resetPassword(email: string): Promise<void> {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + '/reset-password',
  });
  if (error) throw error;
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

function mapUser(user: any): User {
  return {
    id: user.id,
    email: user.email!,
    name: user.user_metadata.name
  };
}