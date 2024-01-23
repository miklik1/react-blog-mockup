import React from "react";

import { LinkContainer } from "react-router-bootstrap";

import Card from "react-bootstrap/Card";

import { formatDate, getRandomImage } from "../../../utils/utils";
import type { TBlogPost } from "../../../types/BlogPost";

import "./post-card.styles.scss";
import { Container } from "react-bootstrap";

interface PostCardProps {
  post: TBlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { id, title, author, likes, comments, publishedAt, content } = post;

  // Omezení délky obsahu pro náhled
  const limitedContent =
    content.length > 70 ? `${content.slice(0, 70)}...` : content;

  return (
    <Container style={{ height: "100%", padding: "1em 0.5em" }}>
      <LinkContainer to={`/blog/${id}`}>
        <Card className="custom-card shadow">
          <Card.Body>
            <Card.Img
              style={{
                backgroundImage: `${getRandomImage()}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "1em",
                height: "100px",
              }}
            />
            <Card.Title className="fs-5">{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
            <Card.Text>{limitedContent}</Card.Text>
            <div>
              <Card.Text className="card-info" style={{ fontSize: "14px" }}>
                <span>❤︎ {likes}</span>
                <span>🗨️ {comments.length}</span>
                <span>{formatDate(publishedAt)}</span>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </LinkContainer>
    </Container>
  );
};

export default PostCard;
