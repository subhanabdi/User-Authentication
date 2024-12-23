import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../features/auth/hooks/useProfile';
import { ProfileInfo } from '../features/auth/components/ProfileInfo';
import { LogoutButton } from '../features/auth/components/LogoutButton';

export function Dashboard() {
  const { user, logout } = useAuth();
  const { profile } = useProfile();

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <LogoutButton onLogout={logout} />
          </div>
        </div>

        <div className="p-6">
          <ProfileInfo user={user} profile={profile} />
        </div>
      </div>
    </div>
  );
}