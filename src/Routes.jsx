import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Uploading = React.lazy(() => import("pages/Uploading"));
const Upload = React.lazy(() => import("pages/Upload"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/uploading" element={<Uploading />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
