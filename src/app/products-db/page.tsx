import { getProducts } from "@/prisma-db";

import style from "./page.module.css";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDbPage = async () => {
  const products: Product[] = await getProducts();
  return (
    <div className={style.productPage}>
      <div className={style.productList}>
        {products.map((singleProduct) => (
          <div key={singleProduct.id} className={style.product}>
            <div>{singleProduct.title}</div>
            <div>&pound;{singleProduct.price}</div>
            <div>{singleProduct.description}</div>
          </div>
        ))}
      </div>
      <Link href="/products-db/create">Create a product</Link>
    </div>
  );
};

export default ProductsDbPage;
