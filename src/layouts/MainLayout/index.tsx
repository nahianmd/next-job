// layouts/MainLayout.tsx
import React, { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-8">{children}</main>
    </div>
  );
};

export default MainLayout;
