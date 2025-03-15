import { getProducts } from "@/prisma-db";

import style from "./page.module.css";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDbPage = async () => {
  const products: Product[] = await getProducts();
  return (
    <div className={style.productList}>
      {products.map((singleProduct) => (
        <div key={singleProduct.id} className={style.product}>
          <div>{singleProduct.title}</div>
          <div>&pound;{singleProduct.price}</div>
          <div>{singleProduct.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductsDbPage;
