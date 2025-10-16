import React from "react";
import { Link } from "react-router-dom";
import configService from "../Appwrite/Config";

const PostCard = ({ $id, title, featuredImage }) => {
  console.log("postcard featured image",featuredImage)
  console.log(configService.getPreview(featuredImage))
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-gray-300 rounded-lg p-4 hover:shadow-lg transition">
        <div className="w-full mb-4 flex justify-center">
          <img
            className="rounded-xl max-h-60 object-cover"
            src={configService.getPreview(featuredImage)}
            alt={title}
          />
        </div>
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;


