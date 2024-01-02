import React from "react";

import { LinkContainer } from "react-router-bootstrap";

import Card from "react-bootstrap/Card";
import StyledButton from "../../button/styled-button.component";

import { formatDate } from "../../../utils/utils";
import type { TBlogPost } from "../../../types/BlogPost";
import "./post-card.styles.scss";

interface PostCardProps {
  post: TBlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { id, title, author, likes, comments, publishedAt, content } = post;

  // Omezení délky obsahu pro náhled
  const limitedContent =
    content.length > 150 ? `${content.slice(0, 150)}...` : content;

  return (
    <LinkContainer to={`/blog/${id}`}>
      <Card className="custom-card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
          <Card.Text>{limitedContent}</Card.Text>
          <div>
            <StyledButton variant="primary">Go to Post</StyledButton>
            <Card.Text className="card-info">
              <span>❤︎{likes}</span>
              <span>🗨️{comments.length}</span>
              <span>{formatDate(publishedAt)}</span>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
};

export default PostCard;
