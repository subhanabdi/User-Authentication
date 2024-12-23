import { AuthResponse, LoginCredentials } from '../types/auth';

// Simulated delay to mimic API call
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock user data
const MOCK_USER = {
  id: '1',
  email: 'user@example.com',
  name: 'John Doe'
};

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  await delay(1000); // Simulate network delay
  
  // Mock authentication logic
  if (credentials.email === 'user@example.com' && credentials.password === 'password') {
    return {
      user: MOCK_USER,
      token: 'mock-jwt-token'
    };
  }
  
  throw new Error('Invalid credentials');
}