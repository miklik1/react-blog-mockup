import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";

import { MyContext } from "../../store/store";

import Comments from "../../components/comments/comments.component";
import BlogPostDisplay from "../../components/post/post-detail/post-detail.component";

import type { BlogPost, Comment } from "../../types/BlogPost";
import { findPostById } from "../../utils/utils";

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
      return findPostById(postsContext.posts, postIdNumber) as BlogPost;
    }
    // V případě nedostatečných dat vrať null
    return null;
  }, [postId, postsContext, postIdNumber]);

  // Funkce pro aktualizaci komentářů
  const updateComments = (postId: number, newComments: Comment[]) => {
    // Kontrola existence potřebných dat
    if (!postId || !postsContext) {
      return;
    }
    // Volání funkce pro aktualizaci komentářů v rámci stavového kontextu
    postsContext.updatePostComments(postId, newComments);
  };

  // Kontrola existence příspěvku a stavového kontextu
  if (!post || !postsContext) {
    return <div>Neplatné ID příspěvku</div>;
  }

  // Renderování komponenty s detaily příspěvku a komentáři
  return (
    <>
      {post && <BlogPostDisplay post={post} />}
      <Comments
        postId={postIdNumber}
        comments={post.comments}
        updateComments={updateComments}
      />
    </>
  );
};

export default PostDetailPage;
