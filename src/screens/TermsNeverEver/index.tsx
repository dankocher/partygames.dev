import DocumentWrapper from "../../components/DocumentWrapper";
import { Document } from "../../components/Document";

import info from "../../data/termsNeverEver.json";

const TermsNeverEver = () => {
  const { description, dateUpdate } = info.main.terms;

  const termsOfUse = "Never Have I Ever. Terms of Use";

  return (
    <DocumentWrapper>
      <Document
        title={termsOfUse}
        date={dateUpdate}
        description={description}
      />
    </DocumentWrapper>
  );
};

export default TermsNeverEver;
