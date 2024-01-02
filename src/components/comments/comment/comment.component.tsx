import React from "react";

import StyledButton from "../../button/styled-button.component";

import type { TComment } from "../../../types/BlogPost";
import "./comment.styles.scss";

export interface CommentProps {
  comment: TComment;
  onReply: (commentId: number) => void;
  replyable: boolean;
}

const Comment: React.FC<CommentProps> = ({ comment, onReply, replyable }) => {
  const { id, author, text, replies } = comment;

  return (
    <>
      <div className="comment">
        <div className="comment-header">
          <strong>{author}</strong>
          {replyable && (
            <StyledButton
              variant="danger"
              size="small"
              onClick={() => onReply(id)}
            >
              Reply
            </StyledButton>
          )}
        </div>
        <p>{text}</p>
        {replies &&
          replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              onReply={onReply}
              replyable={false}
            />
          ))}
      </div>
    </>
  );
};

export default Comment;
