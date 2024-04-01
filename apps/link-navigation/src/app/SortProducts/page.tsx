"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@repo/ui/button";

export default function SortProducts() {
  const searchParams = useSearchParams();

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return (
    <>
      <Button onClick={() => updateSorting("asc")}>Sort Ascending</Button>
      <Button onClick={() => updateSorting("desc")}>Sort Descending</Button>
    </>
  );
}
