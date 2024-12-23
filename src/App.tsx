import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { AuthTabs } from './components/AuthTabs';
import { Dashboard } from './components/Dashboard';
import { useAuth } from './hooks/useAuth';

function AuthenticatedApp() {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {user ? (
        <Dashboard />
      ) : (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Welcome Back
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Sign in to your account or create a new one
              </p>
            </div>
            <AuthTabs />
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AuthenticatedApp />
    </AuthProvider>
  );
}

export default App;