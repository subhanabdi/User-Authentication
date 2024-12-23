# React Authentication App with Supabase

A modern authentication system built with React, TypeScript, and Supabase, featuring a clean UI with Tailwind CSS.

## Features

- 🔐 Secure Authentication
  - Email & Password Sign Up/Sign In
  - Password Reset
  - Session Management
- 👤 User Profile Management
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive Design
- ⚡ Built with Vite
- 🔒 Row Level Security with Supabase

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── features/         # Feature-specific components and hooks
│   └── auth/         # Authentication related code
├── context/          # React Context providers
├── hooks/            # Custom React hooks
├── lib/             # Library configurations
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Authentication Flow

1. **Sign Up**
   - User enters email, password, and name
   - Account is created in Supabase
   - User is redirected to login

2. **Sign In**
   - User enters credentials
   - Upon success, redirected to dashboard
   - Session is maintained using Supabase

3. **Password Reset**
   - User requests password reset
   - Reset link sent to email
   - User sets new password

4. **Logout**
   - Clears session
   - Redirects to login page

## Security

- Row Level Security (RLS) enabled
- Secure password handling
- Protected routes
- Session management

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details