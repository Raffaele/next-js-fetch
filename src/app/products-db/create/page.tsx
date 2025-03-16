import { addProduct } from "@/prisma-db";
import style from "./page.module.css";
import { redirect } from "next/navigation";
import { SubmitButton } from "./_components/SubmitButton";

const CreateProductDbPage = async () => {
  const createProduct = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    await addProduct(title, +price, description);
    redirect("/products-db");
  };
  return (
    <form action={createProduct} className={style.createForm}>
      <label className={style.inputLine}>
        <span>Title</span>
        <input type="text" name="title" />
      </label>
      <label className={style.inputLine}>
        <span>Price</span>
        <input type="number" name="price" />
      </label>
      <label className={style.inputLine}>
        <span>Description</span>
        <textarea name="description"></textarea>
      </label>
      <div>
        <SubmitButton />
      </div>
    </form>
  );
};

export default CreateProductDbPage;
