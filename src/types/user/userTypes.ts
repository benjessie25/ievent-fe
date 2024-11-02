export enum rolesEnum {
  user = 'user',
  admin = 'admin',
}


export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status?: string;
  isVerified?: boolean;
}
