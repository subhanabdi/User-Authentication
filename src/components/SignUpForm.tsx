import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Mail, Lock, User } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { Alert } from './ui/Alert';

interface SignUpFormProps {
  onSignUpSuccess: () => void;
}

export function SignUpForm({ onSignUpSuccess }: SignUpFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { signUp, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const success = await signUp({ email, password, name });
      if (success) {
        setSuccessMessage('Sign up successful! Please check your email and sign in.');
        setName('');
        setEmail('');
        setPassword('');
        setTimeout(() => {
          onSignUpSuccess();
        }, 2000);
      }
    } catch (err) {
      // Error handled in AuthContext
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm">
      {error && <Alert type="error" message={error} />}
      {successMessage && <Alert type="success" message={successMessage} />}
      
      <Input
        id="name"
        type="text"
        label="Full Name"
        icon={User}
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your full name"
      />

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
        placeholder="Choose a password"
        minLength={6}
      />

      <Button
        type="submit"
        isLoading={isLoading}
        className="w-full"
      >
        Sign Up
      </Button>
    </form>
  );
}