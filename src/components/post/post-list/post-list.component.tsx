import { useState } from "react";
import React from "react";
import { Pagination } from "react-bootstrap";
import PostCard from "../post-card/post-card.component";

import type BlogPost from "../../../types/BlogPost";

interface PostListProps {
  posts: BlogPost[];
  postsPerPage: number;
}

const PostList: React.FC<PostListProps> = ({ posts, postsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <Pagination>
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map(
          (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
    </div>
  );
};

export default PostList;
