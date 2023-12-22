import React, { useState } from "react";


import { Pagination } from "react-bootstrap";

import PostCard from "../post-card/post-card.component";

import type { BlogPost } from "../../../types/BlogPost";

interface PostListProps {
  posts: BlogPost[];
  postsPerPage: number;
}

const PostList: React.FC<PostListProps> = ({ posts, postsPerPage }) => {
  // Stavová proměnná pro sledování aktuální stránky
  const [currentPage, setCurrentPage] = useState(1);

  // Index posledního příspěvku na aktuální stránce
  const indexOfLastPost = currentPage * postsPerPage;
  // Index prvního příspěvku na aktuální stránce
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Aktuální příspěvky na aktuální stránce
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Funkce pro změnu aktuální stránky
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    // Zobrazení seznamu příspěvků a navigace stránkami
    <div>
      {/* Mapování příspěvků na komponentu PostCard */}
      {currentPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      {/* Komponenta pro navigaci stránkami */}
      <Pagination>
        {/* Mapování čísel stránek a vytváření tlačítek pro přechod na danou stránku */}
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map(
          (_, index) => (
            <Pagination.Item
              key={index + 1}
              // Nastavení aktivního tlačítka pro aktuální stránku
              active={index + 1 === currentPage}
              // Nastavení funkce pro změnu stránky při kliknutí
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
