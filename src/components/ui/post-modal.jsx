import { forwardRef } from "react";
import { FavouriteIcon } from "../svgs";

const PostModal = forwardRef(({ src, title, liked, toggleLiked }, ref) => {
  return (
    <dialog
      ref={ref}
      className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-6 backdrop:bg-black/40"
    >
      <div className="flex flex-col gap-4">
        <button
          onClick={() => ref.current?.close()}
          className="h-10 w-fit self-end rounded-lg !px-4 text-sm !text-red-700 hover:!bg-red-50"
        >
          Close Modal
        </button>

        <figure className="space-y-3">
          <div className="bg-primary aspect-square w-full overflow-hidden rounded-lg">
            <img src={src} alt={title} className="size-full object-cover" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <figcaption className="text-lg font-medium">{title}</figcaption>
            <FavouriteIcon
              className={`cursor-pointer ${
                liked ? "fill-red-500 [&>g]:opacity-100" : "hover:fill-pink-300"
              }`}
              onClick={() => toggleLiked(src)}
            />
          </div>
        </figure>
      </div>
    </dialog>
  );
});

export default PostModal;
