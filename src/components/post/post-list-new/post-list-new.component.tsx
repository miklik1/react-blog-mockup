import { Col, Container, ListGroup, Row } from "react-bootstrap";
import PostCardFull from "../post-card-full/post-card-full.component";
import { useContext } from "react";
import { MyContext } from "../../../store/store";
import PostCard from "../post-card/post-card.component";
import Header from "../header/header.component";

import "./post-list-new.styles.scss";

const PostListNew = () => {
  const context = useContext(MyContext);
  const posts = context?.posts;

  return (
    posts && (
      <>
        <Header>News</Header>
        <Container className="post-list-new animated animatedFadeInUp fadeInUp">
          <Row>
            <Col sm={6}>
              <PostCardFull post={posts[0]} />
            </Col>
            <Col sm={6} xl={3}>
              <Row
                style={{
                  height: "50%",
                }}
              >
                <PostCardFull post={posts[1]} />
              </Row>
              <Row
                style={{
                  height: "50%",
                }}
              >
                <PostCardFull post={posts[2]} />
              </Row>
            </Col>
            <Col
              sm={12}
              md={12}
              xl={3}
              style={{
                height: "100%",
                padding: "1em",
              }}
            >
              <Row>
                <ListGroup style={{textAlign: "left"}}>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col sm={6} xl={3}>
              <PostCardFull key={2452} post={posts[3]} />
            </Col>
            <Col sm={6} xl={3}>
              <PostCard key={2452} post={posts[4]} />
            </Col>
            <Col sm={6} xl={3}>
              <PostCard key={2452} post={posts[5]} />
            </Col>
            <Col sm={6} xl={3}>
              <PostCard key={2452} post={posts[6]} />
            </Col>
          </Row>
        </Container>
      </>
    )
  );
};

export default PostListNew;
