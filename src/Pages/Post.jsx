import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import configService from "../Appwrite/Config";
import { Button, Container } from "../Components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      configService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    configService.deletePost(post.$id).then((status) => {
      if (status) {
        configService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 bg-gray-700 min-h-screen">
      <Container>
        {/* Featured Image */}
        <div className="w-full relative mb-6 overflow-hidden rounded-xl shadow-lg">
          <img
            src={configService.getPreview(post.featuredImage)}
            alt={post.title}
            className="w-full h-96 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
          {isAuthor && (
            <div className="absolute top-4 right-4 flex space-x-2">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="hover:bg-green-700">Edit</Button>
              </Link>
              <Button bgColor="bg-red-500" className="hover:bg-red-700" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>

        {/* Post Title */}
        <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>

        {/* Post Content */}
        <div className="browser-css prose prose-lg max-w-none text-white">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}


