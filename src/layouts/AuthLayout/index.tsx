import { FC, ReactNode } from 'react';

// project imports

interface Props {
  children: ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => <div className={'h-screen grid justify-center items-center'}>{children}</div>;

export default AuthLayout;
