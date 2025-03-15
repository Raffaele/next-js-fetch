import { users } from '@/app/api/users/_data/users';

export const GET = async () => {
  return Response.json({ result: users });
};