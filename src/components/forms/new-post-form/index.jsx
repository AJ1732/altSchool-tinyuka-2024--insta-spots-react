import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { newPostSchema } from "./schema";
import { Button } from "../../index";
import { useImages } from "../../../context";

export const NewPostFormDialog = forwardRef((props, ref) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const { addPost } = useImages();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(newPostSchema),
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      setUploadProgress(0);

      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            setValue("src", url);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  const handleClose = () => {
    ref.current?.close();
    reset();
    setPreviewUrl("");
    setUploadProgress(0);
    setIsUploading(false);
  };

  const submitHandler = (data) => {
    addPost({
      src: data.src,
      title: data.title,
    });

    ref.current?.close();

    reset();
    setPreviewUrl("");
    setUploadProgress(0);
    setIsUploading(false);
  };

  return (
    <dialog
      ref={ref}
      className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-6 backdrop:bg-black/40"
      {...props}
    >
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="space-y-4 [&>div]:space-y-2"
      >
        <h2 className="text-xl font-semibold">New Post</h2>

        {/* IMAGE UPLOAD */}
        <div className="space-y-3">
          <label>Image URL</label>
          <div className="space-y-3">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file:text-primary block w-full cursor-pointer text-sm text-neutral-500 file:mr-4 file:rounded-lg file:border-0 file:bg-neutral-100 file:px-4 file:py-2 file:text-sm file:font-semibold hover:file:bg-neutral-200"
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
              <div className="relative aspect-video">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="size-full rounded-lg border object-cover object-top"
                />
                <div className="absolute top-2 right-2 rounded bg-green-500 px-2 py-1 text-xs text-white">
                  ✓ Uploaded
                </div>
              </div>
            )}
          </div>

          {/* <input type="hidden" {...register("src")} /> */}
          {errors.src && (
            <p className="text-sm text-red-500">{errors.src.message}</p>
          )}
        </div>

        {/* TITLE */}
        <div>
          <label>Title</label>
          <input
            {...register("title")}
            className="input"
            placeholder="What do you want to title this post?"
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            className="button--secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isUploading || !previewUrl}
            className="button--primary"
          >
            Post
          </Button>
        </div>
      </form>
    </dialog>
  );
});
