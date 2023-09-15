import DocumentWrapper from "../../components/DocumentWrapper";
import { Document } from "../../components/Document";

import info from "../../data/termsTimeZo.json";

const termsTimeZo = () => {
  const { description, dateUpdate } = info.main.terms;

  const termsOfUse = "TimeZo. Terms of Use";

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

export default termsTimeZo;
