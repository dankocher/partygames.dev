import DocumentWrapper from "../../components/DocumentWrapper";
import { Document } from "../../components/Document";

import info from "../../data/privacyContractions.json";

const privacyContractions = () => {
  const {description, dateUpdate} = info.main.privacy;

  const privacyPolicy = "Contraction Counter & Tracker. Privacy Policy";

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

export default privacyContractions;
