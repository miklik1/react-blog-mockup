import React, { useState } from "react";

import Comment from "../comment/comment.component";
import CommentForm from "../comment-form/comment-form.component";

import type { TComment } from "../../../types/BlogPost";
import "./comments.styles.scss";

import Offcanvas from "react-bootstrap/Offcanvas";

interface CommentsProps {
  postId: number;
  comments: TComment[];
  updateComments: (postId: number, newComments: TComment[]) => void;
  showComments: boolean;
  handleComments: () => void;
}

const Comments: React.FC<CommentsProps> = ({
  postId,
  comments,
  updateComments,
  showComments,
  handleComments,
}) => {
  const [replyTo, setReplyTo] = useState<number | undefined>(undefined);
  const [isReply, setIsReply] = useState<boolean>(false);

  const handleReply = (commentId: number) => {
    setReplyTo(commentId);
    setIsReply(true);
  };

  const cancelReply = () => {
    setReplyTo(undefined);
    setIsReply(false);
  };

  return (
    <Offcanvas show={showComments} onHide={handleComments}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Replies</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="comments-container">
          <div className="comments-component">
            <CommentForm
              postId={postId}
              updateComments={updateComments}
              comments={comments}
              replyTo={replyTo}
              isReply={isReply}
              cancelReply={cancelReply}
            />
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                onReply={handleReply}
                replyable={true}
              />
            ))}
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Comments;
