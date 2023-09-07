import DocumentWrapper from "../../components/DocumentWrapper";
import { Document } from "../../components/Document";

import info from "../../data/privacyToD.json";

const privacyToD = () => {
  const { description, dateUpdate } = info.main.privacy;

  const privacyPolicy = "Truth or Dare. Privacy Policy";

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

export default privacyToD;
