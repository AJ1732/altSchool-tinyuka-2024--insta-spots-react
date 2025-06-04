import { FavouriteIcon } from "../svgs";

export default function PostCard({ src, title }) {
  return (
    <figure className="space-y-3">
      <div className="bg-primary aspect-square w-full rounded-lg">
        <img src={src} alt={title} />
      </div>

      <div className="flex items-center justify-between gap-4">
        <figcaption className="font-medium">{title}</figcaption>
        <FavouriteIcon />
      </div>
    </figure>
  );
}
