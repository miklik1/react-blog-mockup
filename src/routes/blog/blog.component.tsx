import React, { useContext } from "react";

import { Route, Routes } from "react-router-dom";

import { MyContext } from "../../store/store";

import PostList from "../../components/post/post-list/post-list.component";
import PostDetailPage from "../post-detail-page/post-detail-page.component";

const Blog: React.FC = () => {
  // Získání příspěvků ze stavového kontextu
  const posts = useContext(MyContext);
  // Počet příspěvků na jedné stránce
  const postsPerPage = 2;

  // Zobrazení chybové zprávy v případě, že příspěvky nejsou načteny
  if (posts === undefined) {
    return <p>Error</p>;
  }

  return (
    <Routes>
        <Route
          index
          element={<PostList posts={posts.posts} postsPerPage={postsPerPage} />}
        />
        <Route path=":postId" element={<PostDetailPage />} />
      </Routes>
  );
};

export default Blog;
