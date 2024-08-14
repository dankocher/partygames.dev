import DocumentWrapper from "../../components/DocumentWrapper";
import { Document } from "../../components/Document";

import info from "../../data/privacyNeverEver.json";

const PrivacyNeverEver = () => {
  const { description, dateUpdate } = info.main.privacy;

  const privacyPolicy = "Did You Ever. Privacy Policy";

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

export default PrivacyNeverEver;
