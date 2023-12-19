import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

import type BlogPost from "../../../types/BlogPost";

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { id, title, author, likes, comments, publishedAt, content } = post;
  const publishedDate = new Date(publishedAt);
  const formattedDate = publishedDate.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const limitedContent =
    content.length > 150
      ? content.slice(0, 150) + "..."
      : content;
  return (
    <LinkContainer to={`/blog/${id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Title>{author}</Card.Title>
          <Card.Title>{likes}</Card.Title>
          <Card.Title>{comments.length}</Card.Title>
          <Card.Title>{formattedDate}</Card.Title>
          <Card.Text>{limitedContent}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
};

export default PostCard;
