"use client";
import { useState } from "react";
import { Button } from "@repo/ui/button";

export default function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Template {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      {children}
    </>
  );
}
