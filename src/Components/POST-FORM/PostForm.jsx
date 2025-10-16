import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import configService from "../../Appwrite/Config";

function PostForm({ post }) {
  const { register, control, handleSubmit, setValue, getValues, watch } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const onSubmit = async (data) => {
    try {
      if (post) {
        const newFeaturedImageObject = data.image[0]
          ? await configService.uploadFile(data.image[0])
          : null;

        if (newFeaturedImageObject) {
          configService.deleteFile(post.featuredImage);
        }

        const updateDbPost = await configService.updatePost(post.$id, {
          ...data,
          featuredImage: newFeaturedImageObject?.$id || post.featuredImage,
        });

        if (updateDbPost) navigate(`/post/${updateDbPost.$id}`);
      } else {
        const newFileId = await configService.uploadFile(data.image[0]);
        console.log(newFileId) // here
        if (newFileId) {
            console.log(data)
          data.featuredImage = newFileId.$id;
          console.log(data.featuredImage)
          const newDbPost = await configService.createPost({
            ...data,
            userId: userData.$id,
          });
          if (newDbPost) {
            console.log(newDbPost.$id)
            navigate(`/post/${newDbPost.$id}`)};
        }
      }
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue, slugTransform]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title"
          placeholder="Enter title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug"
          placeholder="slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) =>
            setValue("slug", slugTransform(e.target.value), { shouldValidate: true })
          }
        />
        <RTE
          control={control}
          label="Content"
          name="content"
          initialValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured image:"
          type="file"
          accept="image/png image/jpg image/jpeg image/gif"
          {...register("image", { required: !post })}
          className="mb-4"
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={configService.getPreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          className={`w-full ${post ? "bg-green-500" : "bg-blue-500"}`}
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;



