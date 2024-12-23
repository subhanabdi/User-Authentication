import React from 'react';
import { LogOut } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

interface LogoutButtonProps {
  onLogout: () => Promise<void>;
}

export function LogoutButton({ onLogout }: LogoutButtonProps) {
  return (
    <Button
      variant="danger"
      onClick={onLogout}
      className="flex items-center"
    >
      <LogOut className="h-4 w-4 mr-2" />
      Logout
    </Button>
  );
}