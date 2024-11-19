import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../screens/Home";
import PrivacyPartyGames from "../screens/PrivacyPartyGames";

import { SCREENS } from "./constants";

import ScrollToTop from "./ScrollToTop";

const Navigation = () => (
  <ScrollToTop>
    <Routes>
      <Route path={SCREENS.HOME} element={<Home/>}/>
      <Route path={SCREENS.PRIVACY} element={<PrivacyPartyGames/>}/>
      {/*<Route path={SCREENS.NEVER_EVER_PRIVACY} element={<PrivacyNeverEver />} />*/}
      {/*<Route path={SCREENS.NEVER_EVER_TERMS} element={<TermsNeverEver />} />*/}
      {/*<Route*/}
      {/*  path={SCREENS.NEVER_EVER_REDIRECT}*/}
      {/*  element={<RedirectNeverEver />}*/}
      {/*/>*/}
      {/*<Route path={SCREENS.TIMEZO_PRIVACY} element={<PrivacyTimeZo />} />*/}
      {/*<Route path={SCREENS.TIMEZO_TERMS} element={<TermsTimeZo />} />*/}
      {/*<Route path={SCREENS.TIMEZO_REDIRECT} element={<RedirectTimeZo />} />*/}
      {/*<Route path={SCREENS.TOD_PRIVACY} element={<PrivacyToD />} />*/}
      {/*<Route path={SCREENS.CONTRACTIONS_PRIVACY} element={<PrivacyContractions />} />*/}
      {/*<Route path={SCREENS.CONTRACTIONS_TERMS} element={<TermsContractions />} />*/}

      <Route path="*" element={<Navigate to={SCREENS.HOME} replace/>}/>
    </Routes>
  </ScrollToTop>
);

export default Navigation;
