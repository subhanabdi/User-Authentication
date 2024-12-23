import { AuthContextType } from '../types/auth';
import { useSession } from '../features/auth/hooks/useSession';
import { useAuthActions } from '../features/auth/hooks/useAuthActions';

export function useAuthState(): AuthContextType {
  const { user, isLoading: sessionLoading } = useSession();
  const { isLoading: actionLoading, error, login, signUp, resetPassword, logout } = useAuthActions();

  return {
    user,
    profile: null,
    isLoading: sessionLoading || actionLoading,
    error,
    login,
    signUp,
    resetPassword,
    logout
  };
}