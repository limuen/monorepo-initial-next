import Image from "next/image";
import { SubmitButton } from "./submit-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <input type="text" name="field-name" />
        <SubmitButton />
      </form>
    </main>
  );
}
