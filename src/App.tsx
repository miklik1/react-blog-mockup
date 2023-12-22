import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import SpinnerContainer from "./components/spinner/spinner.component.tsx";

import "./App.css";


const Navigation = lazy(
  () => import("./routes/navigation/navigation.component.tsx")
);
const Home = lazy(() => import("./routes/home/home.component.tsx"));
const Blog = lazy(() => import("./routes/blog/blog.component.tsx"));

function App() {
  return (
    <Suspense fallback={<SpinnerContainer />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="blog/*" element={<Blog />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
