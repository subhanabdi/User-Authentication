import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';

export function AuthTabs() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  const switchToLogin = () => setActiveTab('login');

  return (
    <div className="w-full max-w-md">
      <div className="flex mb-6">
        <button
          className={`flex-1 py-3 text-center font-medium border-b-2 ${
            activeTab === 'login'
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('login')}
        >
          Sign In
        </button>
        <button
          className={`flex-1 py-3 text-center font-medium border-b-2 ${
            activeTab === 'signup'
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('signup')}
        >
          Sign Up
        </button>
      </div>

      {activeTab === 'login' ? (
        <LoginForm />
      ) : (
        <SignUpForm onSignUpSuccess={switchToLogin} />
      )}
    </div>
  );
}