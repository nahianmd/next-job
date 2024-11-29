// PROJECT IMPORTS
import MainLayout from '../../layouts/MainLayout';
import React from 'react';
import AuthGuard from '@/utils/route-guard/AuthGuard';

// ================================|| MAIN LAYOUT ||================================ //

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <MainLayout>{children}</MainLayout>
    </AuthGuard>
  );
}
