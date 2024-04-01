"use client";
import { Button } from "@repo/ui/button";
import { useState } from "react";

export default function Page() {
  const [error, setError] = useState(false);

  const handleGetError = () => {
    console.log("Error!");
    setError(true);
  };

  return (
    <>{error ? Error() : <Button onClick={handleGetError}>Get Error</Button>}</>
  );
}
