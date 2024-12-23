import React from 'react';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

type AlertType = 'success' | 'error' | 'info';

interface AlertProps {
  type: AlertType;
  message: string;
}

const alertStyles = {
  success: 'bg-green-50 text-green-800 border-green-200',
  error: 'bg-red-50 text-red-800 border-red-200',
  info: 'bg-blue-50 text-blue-800 border-blue-200'
};

const icons = {
  success: CheckCircle2,
  error: XCircle,
  info: AlertCircle
};

export function Alert({ type, message }: AlertProps) {
  const Icon = icons[type];
  
  return (
    <div className={`flex items-center p-4 mb-4 border rounded-lg ${alertStyles[type]}`}>
      <Icon className="h-5 w-5 mr-2" />
      <span>{message}</span>
    </div>
  );
}