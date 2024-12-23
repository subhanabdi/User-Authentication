export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Profile {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  user: User;
  session: any; // Type this properly based on Supabase session
}

export interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signUp: (data: { email: string; password: string; name: string }) => Promise<boolean>;
  resetPassword: (email: string) => Promise<boolean>;
  logout: () => Promise<void>;
}