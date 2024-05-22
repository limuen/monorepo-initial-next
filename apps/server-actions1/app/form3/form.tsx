"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createToDo } from "./actions";
import './form.css';

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending}>{pending ? "Adding" : "Add"}</button>
  );
}

export default function AddToDoForm() {
  const [state, formAction] = useFormState(createToDo, initialState);

  return (
    <form action={formAction}>
      <input type="text" name="todo" />
      <SubmitButton />
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>
  );
}
