"use client";

import style from "./page.module.css";
import Link from "next/link";
import { removeProduct } from "./_actions/product";
import { useOptimistic } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

type Props = {
  products: Product[];
};

export const ProductsDetails = ({ products }: Props) => {
  const [optimisticProducts, setOptimisticProduct] = useOptimistic(
    products,
    (currentProducts, productId) =>
      currentProducts.filter((prod) => prod.id !== productId)
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProduct(productId);
    await removeProduct(productId);
  };
  return (
    <div className={style.productPage}>
      <div className={style.productList}>
        {optimisticProducts.map((singleProduct) => (
          <div key={singleProduct.id} className={style.product}>
            <h3>{singleProduct.title}</h3>
            <div>&pound;{singleProduct.price}</div>
            <div>{singleProduct.description}</div>
            <div className={style.cmdPanel}>
              <Link
                className={style.cmd}
                href={`/products-db/update/${singleProduct.id}`}
              >
                Edit
              </Link>
              <form action={() => removeProductById(singleProduct.id)}>
                <button type="submit">Delete</button>
              </form>
            </div>
          </div>
        ))}
      </div>
      <nav className={style.navList}>
        <Link href="/products-db/create" className={style.navLink}>
          Create a product
        </Link>
        <Link
          href="/products-db/create-with-validation"
          className={style.navLink}
        >
          Create a product with validation
        </Link>
      </nav>
    </div>
  );
};
