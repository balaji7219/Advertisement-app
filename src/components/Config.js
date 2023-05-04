import React from "react";
import Adv from "./Adv";
import Footer from "./Footer";
import Header from "./Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Config = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <Adv />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Config;
