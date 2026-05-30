import React from "react";
import EntDecken from "../../../Component/Ui/Share/EntDecken";
import { dieRegionaleLorm } from "../../../mock";
import DieRegionale from "../component/DieRegionale";
import { regionaleData } from "../../../mock";

const Regionale = () => {
  return (
    <div>
      <EntDecken entDecken={dieRegionaleLorm} />
      <DieRegionale regionaleData={regionaleData} />
    </div>
  );
};

export default Regionale;
