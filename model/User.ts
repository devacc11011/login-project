import { Role } from '@prisma/client';

interface User {
  id: string;
  name: string;
  password: string;
  role: Role;
}
export type { User };
