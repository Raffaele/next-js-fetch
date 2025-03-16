"use client";

import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const formStatus = useFormStatus();
  const { pending } = formStatus;
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Adding..." : "Add product"}
    </button>
  );
};
