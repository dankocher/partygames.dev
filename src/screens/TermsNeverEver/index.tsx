import DocumentWrapper from "../../components/DocumentWrapper";
import { Document } from "../../components/Document";

import info from "../../data/termsNeverEver.json";

const TermsNeverEver = () => {
  const { description, dateUpdate } = info.main.privacy;

  const privacyPolicy = "Never Have I Ever. Terms of Use";

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

export default TermsNeverEver;
