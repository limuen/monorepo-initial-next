"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@repo/ui/button";

export default function LocaleSwitcher() {
  const pathname = usePathname();

  function switchLocale(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${locale}${pathname}`;
    window.history.replaceState(null, "", newPath);
  }

  return (
    <>
      <Button onClick={() => switchLocale("en")}>English</Button>
      <Button onClick={() => switchLocale("fr")}>French</Button>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}
