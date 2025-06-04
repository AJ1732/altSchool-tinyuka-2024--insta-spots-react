import { useImages } from "../../context";
import { PostCard } from "../index";

export default function GallerySection() {
  const { images } = useImages();

  return (
    <section className="grid gap-5 py-5 md:grid-cols-2 lg:grid-cols-3">
      {images.map((post) => (
        <PostCard key={post.src} {...post} />
      ))}
    </section>
  );
}
