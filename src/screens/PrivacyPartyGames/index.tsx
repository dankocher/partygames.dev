import DocumentWrapper from "../../components/DocumentWrapper";
import { Document } from "../../components/Document";

import info from "../../data/privacyPartyGames.json";

const PrivacyPartyGames = () => {
  const { description, dateUpdate } = info.main.privacy;

  const privacyPolicy = "PartyGames LLC. Privacy Policy ";

  return (
    <DocumentWrapper>
      <Document
        title={privacyPolicy}
        date={dateUpdate}
        description={description}
      />
    </DocumentWrapper>
  );
};

export default PrivacyPartyGames;
