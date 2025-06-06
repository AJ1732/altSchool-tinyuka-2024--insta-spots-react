import { useImages } from "../../context";
import { FavouriteIcon } from "../svgs";
import { useDialog } from "../hooks/use-dialog";
import { PostModal } from "../index";

export default function PostCard({ src, title, liked }) {
  const { toggleLiked } = useImages();
  const postModal = useDialog();

  return (
    <>
      <figure className="space-y-3">
        <div
          onClick={() => postModal.open()}
          className="bg-primary aspect-square w-full overflow-hidden rounded-lg"
        >
          <img src={src} alt={title} className="size-full object-cover" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <figcaption className="font-medium">{title}</figcaption>
          <FavouriteIcon
            className={`cursor-pointer ${
              liked ? "fill-red-500 [&>g]:opacity-100" : "hover:fill-pink-300"
            }`}
            onClick={() => toggleLiked(src)}
          />
        </div>
      </figure>
      <PostModal
        ref={postModal.dialogRef}
        {...{ src, title, liked, toggleLiked }}
      />
    </>
  );
}
