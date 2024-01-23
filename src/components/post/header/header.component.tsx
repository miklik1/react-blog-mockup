import React, { ReactNode } from "react";
import Divider from "../../divider/divider.component";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <h2 className="display-4" style={{margin: "0.2em 0"}}>{children}</h2>
      <Divider />
    </>
  );
};

export default Header;
