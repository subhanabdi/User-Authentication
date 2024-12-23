import { User } from '../../../types/auth';

export function mapUser(supabaseUser: any): User {
  return {
    id: supabaseUser.id,
    email: supabaseUser.email!,
    name: supabaseUser.user_metadata.name
  };
}