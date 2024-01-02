import React, { useState } from "react";

import Comment from "../comment/comment.component";
import CommentForm from "../comment-form/comment-form.component";

import type { TComment } from "../../../types/BlogPost";
import "./comments.styles.scss";

interface CommentsProps {
  postId: number;
  comments: TComment[];
  updateComments: (postId: number, newComments: TComment[]) => void;
}

const Comments: React.FC<CommentsProps> = ({
  postId,
  comments,
  updateComments,
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
    <div className="comments-container">
      <div className="comments-component">
        <h2>Leave a comment:</h2>
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
  );
};

export default Comments;
