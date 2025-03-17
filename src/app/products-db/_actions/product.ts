"use server";

import { addProduct, updateProduct, deleteProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export const createProduct = async (prevState: FormState, formData: FormData) => {
  // const title = formData.get("title") as string;
  // const price = formData.get("price") as string;
  // const description = formData.get("description") as string;

  // const errors: Errors = {
  //   ...(!title && { title: "Title is required" }),
  //   ...(!price && { price: "Price is required" }),
  //   ...(!description && { description: "Description is required" }),
  // };

  // if (Object.keys(errors).length) {
  //   return { errors };
  // }
  const { title, price, description, errors } = getFormInfo(formData);

  if (errors) {
    return { errors };
  }

  await addProduct(title, +price, description);
  redirect("/products-db");
};

export const editProduct = async (id: number, prevState: FormState, formData: FormData) => {
  const { title, price, description, errors } = getFormInfo(formData);

  if (errors) {
    return { errors };
  }

  await updateProduct(id, title, +price, description);
  redirect("/products-db");
};

const getFormInfo = (formData: FormData) => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {
    ...(!title && { title: "Title is required" }),
    ...(!price && { price: "Price is required" }),
    ...(!description && { description: "Description is required" }),
  };

  return {
    title,
    price,
    description,
    errors: Object.keys(errors).length ? errors : null
  };
};

export const removeProduct = async (id: number) => {
  await deleteProduct(id);
  revalidatePath('/products-db');
};