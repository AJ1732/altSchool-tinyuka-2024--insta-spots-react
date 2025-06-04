import { IMAGES_DATA } from "../../constants/posts";
import { PostCard } from "../index";

export default function GallerySection() {
  return (
    <section className="grid gap-5 py-5 md:grid-cols-2 lg:grid-cols-3">
      {IMAGES_DATA.map((post) => (
        <PostCard key={post} {...post} />
      ))}
    </section>
  );
}
