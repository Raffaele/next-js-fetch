import { users } from '@/app/api/users/_data/users';

export const GET = async () => {
  await new Promise(res => setTimeout(() => res(null), 1500))
  return Response.json(users);
};