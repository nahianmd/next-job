// PROJECT IMPORTS
import React from 'react';
import AuthLayout from '../../layouts/AuthLayout';

// ================================|| MAIN LAYOUT ||================================ //

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
