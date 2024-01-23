import "./post-card-full.styles.scss";

import { LinkContainer } from "react-router-bootstrap";
import { Badge, Col, Row } from "react-bootstrap";
import React from "react";

import { getRandomImage } from "../../../utils/utils";
import type { TBlogPost } from "../../../types/BlogPost";

interface PostCardProps {
  post: TBlogPost;
}

const PostCardFull: React.FC<PostCardProps> = ({ post }) => {
  const { id, title, author } = post;
  return (
    <LinkContainer
      to={`/blog/${id}`}
      style={{
        height: "100%",
        padding: "1em",
        minHeight: "300px",
      }}
      className="post-card-full"
    >
      <Row
        style={{
          height: "100%",
        }}
      >
        <Col
          style={{
            backgroundImage: `${getRandomImage()}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            borderRadius: "8px",
            transition: "transform 0.3s",
            cursor: "pointer",
            height: "100%",
          }}
          className="post-card-full shadow"
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "10px 20px 0 20px",
              borderRadius: "8px",
              width: "100%",
              color: "#fff",
              textAlign: "left",
            }}
          >
            <Badge style={{ marginBottom: "0.8em" }}>New</Badge>
            <h4>{title}</h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1em",
                paddingBottom: "0.5em",
              }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                alt="Avatar"
                style={{ width: "40px" }}
              />
              <p
                style={{
                  margin: "0",
                }}
              >
                {author}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </LinkContainer>
  );
};

export default PostCardFull;
