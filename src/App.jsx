import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import SinglePost from "./pages/singlePost.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/posts/:slug" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}
