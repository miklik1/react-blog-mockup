import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const GoToTop = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useLayoutEffect(() => {
    onTop();
  }, [routePath]);

  return null;
}
