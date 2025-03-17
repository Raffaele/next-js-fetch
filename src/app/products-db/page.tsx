import { getProducts } from "@/prisma-db";
import { ProductsDetails } from "./products-details";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDbPage = async () => {
  const products: Product[] = await getProducts();
  return <ProductsDetails products={products} />;
};

export default ProductsDbPage;
