import React from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./components/home/HomePage";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";
import ScrollToTop from "./shared/ScrollToTop";

function App() {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
