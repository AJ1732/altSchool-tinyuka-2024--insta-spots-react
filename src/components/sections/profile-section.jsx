import { useState } from "react";

import { Button } from "../index";
import { useDialog } from "../hooks/use-dialog";
import { PencilIcon, PlusIcon } from "../svgs";
import { EditProfileFormDialog } from "../forms/edit-profile-form";
import { NewPostFormDialog } from "../forms/new-post-form";

export default function ProfileSection() {
  const editDialog = useDialog();
  const postDialog = useDialog();

  const [profile, setProfile] = useState({
    name: "Bessie Coleman",
    profession: "Civil Aviator",
    profileImage: "/insta-spots-profile.png",
  });

  const handleEdit = (data) => {
    setProfile((prev) => ({
      ...prev,
      name: data.name || prev.name,
      profession: data.profession || prev.profession,
      profileImage: data.profileImage || prev.profileImage,
    }));
  };

  return (
    <section className="flex justify-between gap-5 py-5 max-md:flex-col md:items-end">
      <div className="flex gap-4 max-md:flex-col max-md:items-center">
        <figure className="bg-primary aspect-square size-20 overflow-hidden rounded-lg md:size-48">
          <img
            src={profile.profileImage}
            alt="Insta Spots Profile Image"
            className="h-full w-full object-cover"
          />
        </figure>

        <div className="flex flex-col justify-between gap-1 font-medium max-md:items-center md:gap-3">
          <h2 className="text-primary text-xl md:text-[2rem]">
            {profile.name}
          </h2>
          <p className="text-primary/70 mb-auto">{profile.profession}</p>

          <Button
            className="button--secondary w-fit px-0 max-md:!mt-6"
            onClick={editDialog.open}
          >
            <PencilIcon />
            Edit Profile
          </Button>
        </div>
      </div>

      <Button className="button--primary" onClick={postDialog.open}>
        <PlusIcon />
        New Post
      </Button>

      <EditProfileFormDialog
        ref={editDialog.dialogRef}
        onSubmit={handleEdit}
        defaultValues={{
          name: profile.name,
          profession: profile.profession,
          profileImage: profile.profileImage,
        }}
      />
      <NewPostFormDialog ref={postDialog.dialogRef} />
    </section>
  );
}
