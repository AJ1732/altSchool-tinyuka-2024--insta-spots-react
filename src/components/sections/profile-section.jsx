import { PencilIcon, PlusIcon } from "../svgs";
import Button from "../ui/button";

export default function ProfileSection() {
  return (
    <section className="flex justify-between gap-5 py-5 max-md:flex-col md:items-end">
      <div className="flex gap-4 max-md:flex-col max-md:items-center">
        <figure className="bg-primary aspect-square size-20 rounded-lg md:size-48"></figure>

        <div className="flex flex-col justify-between gap-1 font-medium max-md:items-center md:gap-3">
          <h2 className="text-primary text-xl md:text-[2rem]">
            Bessie Coleman
          </h2>
          <p className="text-primary/70 mb-auto">Civil Aviator</p>

          <Button className="button--secondary w-fit px-0 max-md:!mt-6">
            <PencilIcon />
            Edit Profile
          </Button>
        </div>
      </div>

      <Button className="button--primary">
        <PlusIcon />
        New Post
      </Button>
    </section>
  );
}
