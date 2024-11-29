// PROJECT IMPORTS
import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { JWTProvider as AuthProvider } from '@/contexts/JWTContext';

// ================================|| MAIN LAYOUT ||================================ //

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthLayout>
      <AuthProvider>{children}</AuthProvider>
    </AuthLayout>
  );
}
