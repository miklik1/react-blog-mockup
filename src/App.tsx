import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import SpinnerContainer from "./components/spinner/spinner.component.tsx";
import "./App.css";
import Navigation from "./routes/navigation/navigation.component.tsx";
import React from "react";

const Home = lazy(() => import("./routes/home/home.component.tsx"));
const Blog = lazy(() => import("./routes/blog/blog.component.tsx"));

const NavigationMemoized = React.memo(Navigation);

const App = () => {

  return (
    <>
    <NavigationMemoized />
    <Suspense fallback={<SpinnerContainer />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog/*" element={<Blog />} />
      </Routes>
    </Suspense>
    </>
  );
};

export default App;
