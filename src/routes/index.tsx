import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ToolPage from '../pages/ToolPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tool/:toolId" element={<ToolPage />} />
    </Routes>
  );
};

export default AppRoutes;
