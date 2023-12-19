import { Route, Routes } from "react-router-dom";

import PostList from "../../components/post/post-list/post-list.component";
import PostDetailPage from "../post-detail-page/post-detail";
import { useContext } from "react";
import { MyContext } from "../../store/store";

const Blog: React.FC = () => {
  const posts = useContext(MyContext);
  const postsPerPage = 5;

  if (posts === undefined) {
    return <p>Error</p>;
  }

  return (
    <>
      <Routes>
        <Route
          index
          element={<PostList posts={posts} postsPerPage={postsPerPage} />}
        />
        <Route path=":postId" element={<PostDetailPage />} />
      </Routes>
    </>
  );
};

export default Blog;
