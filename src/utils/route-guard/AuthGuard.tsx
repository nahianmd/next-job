'use client';

import { useRouter } from 'next/navigation';

// project imports
import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';
import { GuardProps } from '@/types';
import { Loader } from '@/components/Loader';

// types

// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return <Loader />;

  return children;
};

export default AuthGuard;
