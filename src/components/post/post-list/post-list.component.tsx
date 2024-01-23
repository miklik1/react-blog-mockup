import "./post-list.styles.scss";
import Newsletter from "../newsletter/newsletter.component";

import PostListNew from "../post-list-new/post-list-new.component";
import PostListExplore from "../post-list-explore/post-list-explore.component";

const PostList = () => {

  return (
    <>
      <Newsletter />
      <div className="post-list-container">
        <div className="post-list-cards-container">
          <PostListNew />
          <PostListExplore postsPerPage={8}/>
        </div>
      </div>
    </>
  );
};

export default PostList;
