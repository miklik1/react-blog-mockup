import React, { useState, useEffect, useCallback } from "react";

import StyledButton from "../../button/styled-button.component";

import type { TComment } from "../../../types/BlogPost";
import "./comment-form.styles.scss";

interface CommentFormProps {
  postId: number;
  comments: TComment[];
  updateComments: (postId: number, newComments: TComment[]) => void;
  replyTo?: number;
  isReply?: boolean;
  cancelReply?: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({
  postId,
  comments,
  updateComments,
  replyTo,
  isReply,
  cancelReply,
}) => {
  // Stavová proměnná pro uchování údajů z formuláře
  const [formData, setFormData] = useState({
    authorName: localStorage.getItem("username") || "",
    newComment: localStorage.getItem(`newComment${postId}`) || "",
  });

  // Stavová proměnná pro validaci formuláře
  const [isValid, setIsValid] = useState(true);

  // Nalezení komentáře, na který se odpovídá
  const replyToComment = comments.find((comment) => comment.id === replyTo);

  // Funkce pro sledování změn vstupních polí formuláře
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Funkce pro přidání komentáře
  const handleAddComment = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const { authorName, newComment } = formData;

      // Validace formuláře
      if (
        !postId ||
        !updateComments ||
        newComment.trim() === "" ||
        !authorName.trim()
      ) {
        setIsValid(false);
        return;
      }

      setIsValid(true);

      // Vytvoření nového komentáře
      const newCommentObject: TComment = {
        id: comments.length + 1,
        author: authorName,
        text: newComment,
        replies: [],
      };

      // Aktualizace komentářů podle situace (nový komentář nebo odpověď na existující komentář)
      if (replyToComment !== undefined) {
        const updatedComments = comments.map((comment) => {
          if (comment.id === replyToComment?.id) {
            const updatedReplies = Array.isArray(comment.replies)
              ? [...comment.replies, newCommentObject]
              : [newCommentObject];

            return {
              ...comment,
              replies: updatedReplies,
            };
          }
          return comment;
        });

        updateComments(postId, updatedComments);
      } else {
        updateComments(postId, [...comments, newCommentObject]);
      }

      // Vynulování stavu formuláře a odstranění dočasného údaje z localStorage
      setFormData({ authorName: "", newComment: "" });
      localStorage.removeItem(`newComment${postId}`);
    },
    [postId, formData, comments, updateComments, replyToComment]
  );

  // Uložení nových údajů z formuláře do localStorage při změně stavu
  useEffect(() => {
    localStorage.setItem(`newComment${postId}`, formData.newComment);
    localStorage.setItem("username", formData.authorName);
  }, [formData, postId]);

  return (
    <form onSubmit={handleAddComment}>
      {/* Horní část formuláře */}
      <div className="upper-section">
        {/* Vstupní pole pro jméno autora */}
        <input
          type="text"
          name="authorName"
          value={formData.authorName}
          onChange={handleInputChange}
          placeholder="Your Name"
        />

        {/* Odesílací tlačítko */}
        <StyledButton variant="secondary">Submit</StyledButton>
      </div>

      {/* Informace o odpovědi */}
      <p className="reply-info">
        {replyToComment && (
          <p>
            Replying to: <strong>{replyToComment?.author} </strong>
            {/* Tlačítko pro zrušení odpovědi */}
            {isReply && (
              <StyledButton size="small" variant="danger" onClick={cancelReply}>
                Cancel
              </StyledButton>
            )}
          </p>
        )}
      </p>

      {/* Vstupní pole pro text komentáře */}
      <textarea
        name="newComment"
        value={formData.newComment}
        onChange={handleInputChange}
        placeholder="Add a new comment..."
        rows={4}
        cols={50}
      />

      {/* Varování o nevyplněných polích formuláře */}
      {!isValid && <p className="warning">Please fill in all fields</p>}
    </form>
  );
};

export default CommentForm;
