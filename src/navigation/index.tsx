import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../screens/Home";
import Privacy from "../screens/Privacy";

import { SCREENS } from "./constants";

import ScrollToTop from "./ScrollToTop";

const Navigation = () => {
  console.log("version with deploy version 3.2");
  return (
    <ScrollToTop>
      <Routes>
        <Route path={SCREENS.HOME} element={<Home />} />
        <Route path={SCREENS.PRIVACY} element={<Privacy />} />

        <Route path="*" element={<Navigate to={SCREENS.HOME} replace />} />
      </Routes>
    </ScrollToTop>
  );
};

export default Navigation;
