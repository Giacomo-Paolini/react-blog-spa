import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${slug}`).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  }, [slug]);

  return (
    <div>
      <h1 className="text-center text-4xl">Single Post</h1>
      <div className="text-center">
        {post && post.title ? post.title : "No Title"}
        {post && post.content ? post.content : "No Content"}
      </div>
    </div>
  );
}
