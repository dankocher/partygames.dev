import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../screens/Home";
import Privacy from "../screens/Privacy";

import { SCREENS } from "./constants";

const Navigation = () => {
  console.log("version with basename");
  return (
    <Routes>
      <Route path={SCREENS.HOME} element={<Home />} />
      <Route path={SCREENS.PRIVACY} element={<Privacy />} />

      {/* <Route path="*" element={<Navigate to={SCREENS.HOME} replace />} /> */}
    </Routes>
  );
};

export default Navigation;
