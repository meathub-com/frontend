export type UserRole = 'anonymous' | 'company' | 'admin';

export type AuthContextType = {
  userRole: UserRole;
  setUserRole: React.Dispatch<React.SetStateAction<UserRole>>;
};
