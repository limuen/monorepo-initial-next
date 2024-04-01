"use client";
import { useState } from "react";
import { Button } from "@repo/ui/button";
import Link from "next/link";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Link href="/dashboard/about">About</Link>
        <br />
        <Link href="/dashboard/settings">setting</Link>
      </div>
      <h1>Layout {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      {children}
    </>
  );
}
