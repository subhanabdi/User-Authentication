import React, { createContext } from 'react';
import { AuthContextType } from '../types/auth';
import { useAuthState } from '../hooks/useAuthState';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const authState = useAuthState();
  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
}