import React from "react";

import type { TComment } from "../../../types/BlogPost";
import "./comment.styles.scss";
import { CustomButton } from "../../button/custom-button.component";

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
        <div className="comment-header" style={{ marginBottom: "0.5em" }}>
          <strong>{author}</strong>
          {replyable && (
            <CustomButton
              text="Reply"
              textColor="black"
              size="small"
              backgroundColor="side"
              onClick={() => onReply(id)}
            />
          )}
        </div>
        <div
          style={{ display: "flex", gap: "1em", justifyContent: "flex-start", alignItems: "center" }}
        >
          {!replyable && <div className="vr"></div>}
          <p style={{ margin: "0"}}>{text}</p>
        </div>
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
