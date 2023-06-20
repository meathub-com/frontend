export type UserRole = 'anonymous' | 'company' | 'admin';

export type AuthContextType = {
  userRole: UserRole;
  setUserRole: React.Dispatch<React.SetStateAction<UserRole>>;
};

export type AuthResponse = {
  authToken: string;
  refreshToken: string;
  companyId: string;
  role: UserRole;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
};
