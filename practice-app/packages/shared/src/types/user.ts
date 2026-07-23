export type UserRole = 'admin' | 'teacher' | 'student';

export interface User {
  id: string;
  username: string;
  displayName: string;
  role: UserRole;
  avatar?: string;
  schoolId?: string;
  classId?: string;
  grade?: number;
  isDisabled: boolean;
  createdAt: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  displayName: string;
  schoolCode?: string;
  classId?: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: Omit<User, 'password'>;
}

export interface CreateUserRequest {
  username: string;
  password: string;
  displayName: string;
  role: UserRole;
  schoolId?: string;
  classId?: string;
  grade?: number;
}
