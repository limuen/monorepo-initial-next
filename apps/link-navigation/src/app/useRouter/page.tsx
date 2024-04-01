"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";

export default function Page() {
  const router = useRouter();

  return <Button onClick={() => router.push("/dashboard")}>Dashboard</Button>;
}
