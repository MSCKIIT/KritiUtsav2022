import React from "react";
import Dashboard from "pages/Dashboard";
import Signin from "pages/Signin";
import Music from "pages/Music";
import Theatre from "pages/Theatre";
import Dance from "pages/Dance";
import Literary from "pages/Literary";
import Arts from "pages/Arts";
import RegnLiveSoon from "pages/RegnLiveSoon";
import Home1 from "pages/Home1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/regnlivesoon" element={<RegnLiveSoon />} />
        <Route path="/music" element={<Music />} />
        <Route path="/dance" element={<Dance />} />
        <Route path="/literary" element={<Literary />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/theatre" element={<Theatre />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
