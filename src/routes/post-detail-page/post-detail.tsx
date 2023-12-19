import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../store/store";
import { findPostById } from "../../utils/utils";

const PostDetailPage = () => {
  const posts = useContext(MyContext);

  const { postId } = useParams<{ postId: string }>();

  if (postId === undefined) {
    return <div>Invalid Post ID</div>;
  }

  const postIdNumber = parseInt(postId);

  const post = posts && findPostById(posts, postIdNumber);

  return (
    <>
    { post && <div>{post.title}</div> }
    </>
  );
};

export default PostDetailPage;
