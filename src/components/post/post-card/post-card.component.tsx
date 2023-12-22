import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { LinkContainer } from "react-router-bootstrap";

import type { BlogPost } from "../../../types/BlogPost";

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  // Rozbalení vlastností z objektu post
  const { id, title, author, likes, comments, publishedAt, content } = post;

  // Převod řetězce na objekt datumu pro formátování
  const publishedDate = new Date(publishedAt);

  // Formátování data pro zobrazení
  const formattedDate = publishedDate.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Omezení délky obsahu pro náhled
  const limitedContent =
    content.length > 150 ? `${content.slice(0, 150)}...` : content;

  return (
    <LinkContainer to={`/blog/${id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
          <Card.Text>Likes: {likes}</Card.Text>
          <Card.Text>Comments: {comments.length}</Card.Text>
          <Card.Text>Published on: {formattedDate}</Card.Text>
          <Card.Text>{limitedContent}</Card.Text>
          <Button variant="primary">Go to Post</Button>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
};

export default PostCard;
