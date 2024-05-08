import prisma from '../config/DbConnect.js';
import type { User } from '../model/User';

async function saveUser(user: User): Promise<User> {
  return await prisma.users.create({
    data: user,
  });
}

async function findUserById(toFindId: string): Promise<User | null> {
  const user = await prisma.users.findUnique({
    where: {
      id: toFindId,
    },
  });
  return user;
}

export { findUserById, saveUser };
