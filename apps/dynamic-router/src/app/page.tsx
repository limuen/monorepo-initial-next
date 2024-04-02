// export default function Page() {
//   return (
//     <div className="p-10 mt-6 bg-sky-600 text-white rounded-xl">
//       Hello, App!
//     </div>
//   );
// }

import Link from "next/link";
import { photos } from "./data";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap">
      {photos.map(({ id, src }: any) => (
        <Link key={id} href={`/photo/${id}`}>
          <img width="200" src={src} className="m-1" />
        </Link>
      ))}
    </main>
  );
}
