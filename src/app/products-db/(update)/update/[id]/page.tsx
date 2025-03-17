// import style from "../page.module.css";
// import { useActionState } from "react";
// import {
//   createProduct,
//   FormState,
// } from "@/app/products-db/(create)/create-with-validation/_actions/product";
import { getProduct } from "@/prisma-db";
import { ProductEditForm } from "../components/product-edit-form";
import { Product } from "@prisma/client";
import { notFound } from "next/navigation";

const EditProductDbPageWithValidation = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <ProductEditForm product={product} />;
};

export default EditProductDbPageWithValidation;
