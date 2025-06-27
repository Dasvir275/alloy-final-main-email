import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Mail, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface EmailStatusProps {
  showTest?: boolean;
}

export default function EmailStatus({ showTest = false }: EmailStatusProps) {
  const [emailStatus, setEmailStatus] = useState<'checking' | 'connected' | 'error' | null>(null);

  useEffect(() => {
    if (showTest) {
      checkEmailConnection();
    }
  }, [showTest]);

  const checkEmailConnection = async () => {
    setEmailStatus('checking');
    try {
      const response = await fetch('/api/test-email');
      const data = await response.json();
      setEmailStatus(data.connected ? 'connected' : 'error');
    } catch (error) {
      setEmailStatus('error');
    }
  };

  if (!showTest || emailStatus === null) return null;

  return (
    <div className="mb-4">
      {emailStatus === 'checking' && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Testing email connection...
          </AlertDescription>
        </Alert>
      )}
      
      {emailStatus === 'connected' && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Email service is connected and ready. You'll receive confirmation emails when forms are submitted.
          </AlertDescription>
        </Alert>
      )}
      
      {emailStatus === 'error' && (
        <Alert className="border-red-200 bg-red-50">
          <XCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            Email service is not configured. Contact forms will still be saved, but no emails will be sent.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
