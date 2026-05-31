import React from "react";
import EntDecken from "../../../Component/Ui/Share/EntDecken";
import { loremipsum, newsletter } from "../../../mock";
import Newsletter from "../component/Newsletter";

const Downloads = () => {
  return (
    <>
      <EntDecken entDecken={loremipsum} />
      <Newsletter newsletter={newsletter} />
    </>
  );
};

export default Downloads;
