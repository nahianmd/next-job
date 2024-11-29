// PROJECT IMPORTS
import MainLayout from '../../layouts/MainLayout';
import React from 'react';

// ================================|| MAIN LAYOUT ||================================ //

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <AuthGuard>
    <MainLayout>{children}</MainLayout>
    // </AuthGuard>
  );
}
