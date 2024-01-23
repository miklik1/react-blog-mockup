import React, { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { MyContext } from "../../store/store";

import Comments from "../../components/comments/comment-list/comments.component";
import BlogPostDisplay from "../../components/post/post-detail/post-detail.component";

import { findPostById } from "../../utils/utils";
import type { TBlogPost, TComment } from "../../types/BlogPost";

const PostDetailPage: React.FC = () => {
  // Získání parametru z URL
  const { postId = "" } = useParams<{ postId?: string }>();
  // Získání dat ze stavového kontextu
  const postsContext = useContext(MyContext);

  // Převedení postId na číslo
  const postIdNumber = parseInt(postId);

  // Memoizace příspěvku pro optimalizaci výkonu
  const post = useMemo(() => {
    // Pokud jsou k dispozici id příspěvku a stavový kontext, hledej příspěvek
    if (postId !== undefined && postsContext !== undefined) {
      return findPostById(postsContext.posts, postIdNumber) as TBlogPost;
    }
    // V případě nedostatečných dat vrať null
    return null;
  }, [postId, postsContext, postIdNumber]);

  // Funkce pro aktualizaci komentářů
  const updateComments = (postId: number, newComments: TComment[]) => {
    // Kontrola existence potřebných dat
    if (!postId || !postsContext) {
      return;
    }
    // Volání funkce pro aktualizaci komentářů v rámci stavového kontextu
    postsContext.updatePostComments(postId, newComments);
  };
  const [showComments, setShowComments] = useState(false);
  const handleShowComments = () => setShowComments(true);
  const handleHideComments = () => setShowComments(false);

  // Kontrola existence příspěvku a stavového kontextu
  if (!post || !postsContext) {
    return <div>Non valid ID</div>;
  }

  return (
    <>
      {post && (
        <BlogPostDisplay post={post} handleShowComments={handleShowComments} />
      )}
      <Comments
        postId={postIdNumber}
        comments={post.comments}
        updateComments={updateComments}
        showComments={showComments}
        handleComments={handleHideComments}
      />
    </>
  );
};

export default PostDetailPage;
