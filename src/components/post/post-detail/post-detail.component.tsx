import React, { useContext } from "react";
import { BlogPost } from "../../../types/BlogPost";
import { MyContext } from "../../../store/store";

interface BlogPostProps {
  post: BlogPost;
}

const BlogPostDisplay: React.FC<BlogPostProps> = ({ post }) => {
  // Získání kontextu
  const context = useContext(MyContext);

  // Obsluha události pro kliknutí na tlačítko Like
  const handleLikeClick = () => {
    // Zavolání funkce pro aktualizaci počtu Likes
    context?.updatePostLikes(post.id);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
      <p>
        <strong>Likes:</strong> {post.likes}
        <button
          onClick={handleLikeClick}
          disabled={context?.hasUserLikedPost(post.id)}
        >
          Like
        </button>
      </p>
      <p>
        <strong>Content:</strong> {post.content}
      </p>
      <p>
        <strong>Published At:</strong> {post.publishedAt}
      </p>
    </div>
  );
};

export default BlogPostDisplay;
