import React, { createContext, useState } from 'react';
import { AuthContextType, UserRole } from '@/features/auth';

export const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole>('anonymous');

  return <AuthContext.Provider value={{ userRole, setUserRole }}>{children}</AuthContext.Provider>;
};
