import DocumentWrapper from "../../components/DocumentWrapper";
import { Document } from "../../components/Document";

import info from "../../data/privacyTimeZo.json";

const privacyTimeZo = () => {
  const { description, dateUpdate } = info.main.privacy;

  const privacyPolicy = "TimeZo. Privacy Policy";

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

export default privacyTimeZo;
