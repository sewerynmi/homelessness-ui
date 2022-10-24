import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainTemplate from 'templatess/MainTemplate';
import Home from './Home';

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/homelessness/:location/:year" element={<Home />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
