import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Mail, Lock, Loader } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { Alert } from './ui/Alert';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const { login, resetPassword, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      // Error is handled in AuthContext
    }
  };

  const handleForgotPassword = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    try {
      await resetPassword(email);
      setResetEmailSent(true);
    } catch (err) {
      // Error is handled in AuthContext
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm">
      {error && <Alert type="error" message={error} />}
      {resetEmailSent && (
        <Alert 
          type="success" 
          message="Password reset instructions have been sent to your email" 
        />
      )}
      
      <Input
        id="email"
        type="email"
        label="Email"
        icon={Mail}
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <Input
        id="password"
        type="password"
        label="Password"
        icon={Lock}
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      <div className="flex justify-end">
        <button
          onClick={handleForgotPassword}
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          Forgot password?
        </button>
      </div>

      <Button
        type="submit"
        isLoading={isLoading}
        className="w-full"
      >
        Sign In
      </Button>
    </form>
  );
}