import { photos } from "../../data";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: any = photos.find((p) => p.id === id);
  return <img className="block w-1/4 mx-auto mt-10" src={photo.src} />;
}
