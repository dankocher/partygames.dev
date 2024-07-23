import DocumentWrapper from "../../components/DocumentWrapper";
import { Document } from "../../components/Document";

import info from "../../data/termsContractions.json";

const termsContractions = () => {
  const { description, dateUpdate } = info.main.terms;

  const termsOfUse = "Contraction Counter & Tracker. Terms of Use";

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

export default termsContractions;
