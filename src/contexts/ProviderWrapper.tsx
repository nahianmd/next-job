'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import { JWTProvider as AuthProvider } from '@/contexts/JWTContext';

export default function ProviderWrapper({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
