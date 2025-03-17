"use client";

import style from "../page.module.css";
import { useActionState } from "react";
import { editProduct, FormState } from "@/app/products-db/_actions/product";
import { Product } from "@prisma/client";

type Props = {
  product: Product;
};

export const ProductEditForm = ({ product }: Props) => {
  const initialState: FormState = {
    errors: {},
  };

  const editProductId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductId,
    initialState
  );
  return (
    <div>
      <p>
        In this form we are using a separate file for server action and we are
        using it into a client side component
      </p>
      <form action={formAction} className={style.createForm}>
        <input type="hidden" name="id" value={product.id} />
        <div className={style.inputLine}>
          <label>
            <span>Title</span>
            <input type="text" name="title" defaultValue={product.title} />
          </label>
          {state.errors.title && (
            <p className={style.inputError}>{state.errors.title}</p>
          )}
        </div>
        <div className={style.inputLine}>
          <label>
            <span>Price</span>
            <input type="number" name="price" defaultValue={product.price} />
          </label>
          {state.errors.price && (
            <p className={style.inputError}>{state.errors.price}</p>
          )}
        </div>
        <div className={style.inputLine}>
          <label>
            <span>Description</span>
            <textarea
              name="description"
              defaultValue={product.description ?? ""}
            ></textarea>
          </label>
          {state.errors.description && (
            <p className={style.inputError}>{state.errors.description}</p>
          )}
        </div>
        <div>
          <button type="submit" disabled={isPending}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
