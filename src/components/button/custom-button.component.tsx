import { FC, MouseEvent } from "react";
import "./custom-button.styles.scss";

export interface ButtonProps {
  text: string;
  isDisabled?: boolean;
  type?: "outline" | "filled" | "text";
  variant?: "oval" | "rectangular";
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  textColor?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  shadow?: boolean;
}

const CustomButton: FC<ButtonProps> = ({
  text,
  isDisabled = false,
  type = "filled",
  size = "medium",
  backgroundColor = "white",
  textColor = "black",
  onClick,
  shadow = false,
}: ButtonProps) => {
  const shadows = shadow ? "shadow" : "";
  const disabled = isDisabled ? "disabled" : "";

  return (
    <button
      onClick={onClick}
      className={[
        "button",
        `${size}`,
        `${type}`,
        `${shadows}`,
        `${disabled}`,
        `bg-${backgroundColor}`,
        `text-${textColor}`,
      ].join(" ")}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

CustomButton.defaultProps = {
  isDisabled: false,
  type: "filled",
  variant: "oval",
  size: "medium",
  backgroundColor: "white",
  textColor: "black",
  shadow: false,
};

export { CustomButton };
