import { use } from "react";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    message: "Hello, Dashboard!",
  };
}

export default function Page() {
  const { message } = use(getData());
  return <h1>{message}</h1>;
}
