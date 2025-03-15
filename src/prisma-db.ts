import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count) return;
  await prisma.product.createMany({
    data: [
      { title: 'Product 1', price: 500, description: 'Description 1' },
      { title: 'Product 2', price: 700, description: 'Description 2' },
      { title: 'Product 3', price: 1000, description: 'Description 3' }
    ]
  })
};

seedProducts();

const waitRandomly = (minDelay = 800, maxDelay = 1800) => {
  const diff = maxDelay - minDelay;
  const delay = minDelay + Math.trunc(diff * Math.random());
  return new Promise(resolver => setTimeout(() => resolver(null), delay));
}

export const getProducts = async () => {
  await waitRandomly();
  return prisma.product.findMany();
}

export const getProduct = async (id: number) => {
  await waitRandomly();
  return prisma.product.findUnique({
    where: { id }
  });
};

export const addProduct = async (title: string, price: number, description: string) => {
  await waitRandomly();
  return prisma.product.create({
    data: { title, price, description }
  });
}

export const updateProduct = async (id: number, title: string, price: number, description: string) => {
  await waitRandomly();
  return prisma.product.update({
    where: { id },
    data: { title, price, description }
  })
};

export const deleteProduct = async (id: number) => {
  await waitRandomly();
  return prisma.product.delete({
    where: { id }
  })
}

