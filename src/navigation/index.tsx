import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../screens/Home";
import PrivacyPartyGames from "../screens/PrivacyPartyGames";
import PrivacyNeverEver from "../screens/PrivacyNeverEver";
import PrivacyTimeZo from "../screens/PrivacyTimeZo";
import TermsNeverEver from "../screens/TermsNeverEver";

import { SCREENS } from "./constants";

import ScrollToTop from "./ScrollToTop";

const Navigation = () => (
  <ScrollToTop>
    <Routes>
      <Route path={SCREENS.HOME} element={<Home />} />
      <Route path={SCREENS.PRIVACY} element={<PrivacyPartyGames />} />
      <Route path={SCREENS.NEVER_EVER_PRIVACY} element={<PrivacyNeverEver />} />
      <Route path={SCREENS.NEVER_EVER_TERMS} element={<TermsNeverEver />} />
      <Route path={SCREENS.TIMEZO_PRIVACY} element={<PrivacyTimeZo />} />

      <Route path="*" element={<Navigate to={SCREENS.HOME} replace />} />
    </Routes>
  </ScrollToTop>
);
export default Navigation;
