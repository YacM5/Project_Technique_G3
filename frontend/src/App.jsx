import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageOne from "./pages/PageOne/PageOne";
import PageTwo from "./pages/PageTwo/PageTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
        <Route path="*" element={<Navigate to="/page-one" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
