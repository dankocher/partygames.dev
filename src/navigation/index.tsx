import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../screens/home";

import { SCREENS } from "./constants";

const Navigation = () => {
  return (
    <Routes>
      <Route path={SCREENS.HOME} element={<Home />}></Route>
      {/* <Route path={SCREENS.PORTFOLIO} element={<Portfolio />} /> */}

      <Route path="*" element={<Navigate to={SCREENS.HOME} replace />} />
    </Routes>
  );
};

export default Navigation;
