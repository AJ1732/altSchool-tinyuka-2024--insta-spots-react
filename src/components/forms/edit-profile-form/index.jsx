import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { editProfileSchema } from "./schema";
import { Button } from "../../index";

export const EditProfileFormDialog = forwardRef(
  ({ defaultValues, onSubmit }, ref) => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState("");

    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm({
      resolver: zodResolver(editProfileSchema),
      defaultValues,
    });

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setIsUploading(true);
        setUploadProgress(0);

        const url = URL.createObjectURL(file);
        setPreviewUrl(url);

        const interval = setInterval(() => {
          setUploadProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setIsUploading(false);
              setValue("profileImage", url);
              return 100;
            }
            return prev + 10;
          });
        }, 100);
      }
    };

    const submitHandler = (data) => {
      onSubmit(data);
      ref.current?.close();
    };

    return (
      <dialog
        ref={ref}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-6 backdrop:bg-black/40"
      >
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          <h2 className="text-xl font-semibold">Edit Profile</h2>

          {/* IMAGE FIELD */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Profile Image
            </label>
            <div className="space-y-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file:text-primary block w-full text-sm text-neutral-500 file:mr-4 file:rounded-lg file:border-0 file:bg-neutral-100 file:px-4 file:py-2 file:text-sm file:font-semibold hover:file:bg-neutral-200"
              />

              {isUploading && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Uploading...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {previewUrl && !isUploading && (
                <div className="bg-primary relative aspect-square rounded-lg">
                  <img
                    src={previewUrl}
                    alt="Profile Preview"
                    className="size-full rounded-lg border object-contain object-center"
                  />
                  <div className="absolute -top-2 -right-2 rounded bg-green-500 px-2 py-1 text-xs text-white">
                    ✓
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* NAME */}
          <div>
            <label className="mb-2 block text-sm font-medium">Name</label>
            <input {...register("name")} className="input w-full" />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* PROFESSION */}
          <div>
            <label>Profession</label>
            <input {...register("profession")} className="input w-full" />
            {errors.profession && (
              <p className="text-sm text-red-500">
                {errors.profession.message}
              </p>
            )}
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              className="button--secondary"
              onClick={() => ref.current?.close()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isUploading}
              className="button--primary"
            >
              Save
            </Button>
          </div>
        </form>
      </dialog>
    );
  },
);
