import React from 'react';
import { User as UserIcon, Mail, Calendar } from 'lucide-react';
import { User, Profile } from '../../../types/auth';

interface ProfileInfoProps {
  user: User;
  profile: Profile | null;
}

export function ProfileInfo({ user, profile }: ProfileInfoProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile Information</h2>
      <div className="space-y-3">
        <div className="flex items-center text-gray-700">
          <UserIcon className="h-5 w-5 mr-3 text-gray-400" />
          <span className="font-medium">{user.name}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Mail className="h-5 w-5 mr-3 text-gray-400" />
          <span>{user.email}</span>
        </div>
        {profile && (
          <div className="flex items-center text-gray-700">
            <Calendar className="h-5 w-5 mr-3 text-gray-400" />
            <span>Member since {new Date(profile.created_at).toLocaleDateString()}</span>
          </div>
        )}
      </div>
    </div>
  );
}