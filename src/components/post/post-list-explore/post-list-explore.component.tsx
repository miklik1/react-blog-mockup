import { useContext, useState } from "react";
import PostCard from "../post-card/post-card.component";
import { MyContext } from "../../../store/store";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import Header from "../header/header.component";
import "./post-list-explore.styles.scss";

interface PostListExploreProps {
  postsPerPage: number;
}

// eslint-disable-next-line react/prop-types
const PostListExplore: React.FC<PostListExploreProps> = ({ postsPerPage }) => {
  const context = useContext(MyContext);
  const posts = context?.posts;

  // Stavová proměnná pro sledování aktuální stránky
  const [currentPage, setCurrentPage] = useState(1);

  // Index posledního příspěvku na aktuální stránce
  const indexOfLastPost = currentPage * postsPerPage;
  // Index prvního příspěvku na aktuální stránce
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Aktuální příspěvky na aktuální stránce
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  // Funkce pro změnu aktuální stránky
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    posts && (
      <>
        <Header>Explore</Header>
        <Container>
          <Row>
            {currentPosts?.map((post) => (
              <Col
                key={post.id}
                md={6}
                lg={4}
                xl={3}
                style={{ marginBottom: "1em" }}
                className="fadeIn"
              >
                <PostCard key={post.id} post={post} />
              </Col>
            ))}
          </Row>
          <Pagination>
            {Array.from({
              length: Math.ceil(posts.length / postsPerPage),
            }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                // Nastavení aktivního tlačítka pro aktuální stránku
                active={index + 1 === currentPage}
                // Nastavení funkce pro změnu stránky při kliknutí
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Container>
      </>
    )
  );
};

export default PostListExplore;
