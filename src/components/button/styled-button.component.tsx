import React from "react";

import "./styled-button.styles.scss";

export interface StyledButtonProps {
  variant?: "primary" | "secondary" | "danger" | "submit";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children?: string;
  disabled?: boolean;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  variant,
  onClick,
  children,
  disabled,
  size,
}) => {
  return (
    <button
      className={["styled-button", `styled-button--${size}`, `${variant}`].join(
        " "
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default StyledButton;
