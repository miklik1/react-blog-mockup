import React, { Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";


import SpinnerContainer from "../../components/spinner/spinner.component";

const PostList = lazy(
  () => import("../../components/post/post-list/post-list.component")
);
const PostDetailPage = lazy(
  () => import("../post-detail-page/post-detail-page.component")
);

const Blog: React.FC = () => {


  return (
    <Suspense fallback={<SpinnerContainer />}>
      <Routes>
        <Route
          index
          element={<PostList/>}
        />
        <Route path=":postId" element={<PostDetailPage />} />
      </Routes>
    </Suspense>
  );
};

export default Blog;
