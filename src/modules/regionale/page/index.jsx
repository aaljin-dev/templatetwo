import React from "react";
import EntDecken from "../../../Component/Ui/Share/EntDecken";
import { dieRegionaleLorm } from "../../../mock";
import DieRegionale from "../component/DieRegionale";
import {
  regionaleData,
  regionaleTwoData,
  footerSecand,
  footerSecandNew,
} from "../../../mock";
import DieRegionaleTwo from "../component/DieRegionaleTwo";
import Footer from "../../../Component/Ui/Share/Footer";

const Regionale = () => {
  return (
    <div>
      <EntDecken entDecken={dieRegionaleLorm} />
      <DieRegionale regionaleData={regionaleData} />
      <DieRegionaleTwo regionaleTwoData={regionaleTwoData} />
      <Footer footerOne={footerSecand} footerSecandNew={footerSecandNew} />
    </div>
  );
};

export default Regionale;
