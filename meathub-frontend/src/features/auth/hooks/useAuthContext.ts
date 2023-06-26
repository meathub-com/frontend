import { useContext } from 'react';
import { AuthContext, AuthContextType } from '@/features/auth';

export const useAuthContext = () => {
  const { userRole, setUserRole } = useContext(AuthContext) as AuthContextType;

  if (typeof userRole === 'undefined') {
    throw new Error('userRole has to be used with a parent AuthContext.Provider');
  }
  if (typeof setUserRole === 'undefined') {
    throw new Error('setUserRole has to be used with a parent AuthContext.Provider');
  }

  return { userRole, setUserRole };
};
