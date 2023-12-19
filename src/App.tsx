import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import SpinnerContainer from "./components/spinner/spinner.component";

const Navigation = lazy(
  () => import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const Blog = lazy(() => import("./routes/blog/blog.component"));

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
