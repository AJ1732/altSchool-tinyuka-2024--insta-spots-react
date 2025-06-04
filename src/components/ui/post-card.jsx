import { useImages } from "../../context";
import { FavouriteIcon } from "../svgs";

export default function PostCard({ src, title }) {
  const { toggleLiked, images } = useImages();
  const post = images.find((img) => img.src === src);

  return (
    <figure className="space-y-3">
      <div className="bg-primary aspect-square w-full overflow-hidden rounded-lg">
        <img src={src} alt={title} className="size-full object-cover" />
      </div>

      <div className="flex items-center justify-between gap-4">
        <figcaption className="font-medium">{title}</figcaption>
        <FavouriteIcon
          className={`cursor-pointer ${
            post.liked
              ? "fill-red-500 [&>g]:opacity-100"
              : "hover:fill-pink-300"
          }`}
          onClick={() => toggleLiked(src)}
        />
      </div>
    </figure>
  );
}
