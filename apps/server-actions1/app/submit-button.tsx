"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@repo/ui/button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return <Button aria-disabled={pending}>{pending ? "Adding" : "Add"}</Button>;
}
