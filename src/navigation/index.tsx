import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../screens/Home";
import PrivacyPartyGames from "../screens/PrivacyPartyGames";
import PrivacyNeverEver from "../screens/PrivacyNeverEver";

import { SCREENS } from "./constants";

import ScrollToTop from "./ScrollToTop";

const Navigation = () => (
  <ScrollToTop>
    <Routes>
      <Route path={SCREENS.HOME} element={<Home />} />
      <Route path={SCREENS.PRIVACY} element={<PrivacyPartyGames />} />
      <Route path={SCREENS.NEVER_EVER_PRIVACY} element={<PrivacyNeverEver />} />

      <Route path="*" element={<Navigate to={SCREENS.HOME} replace />} />
    </Routes>
  </ScrollToTop>
);
export default Navigation;
