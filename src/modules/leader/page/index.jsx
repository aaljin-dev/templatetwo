import React from "react";
import EntDecken from "../../../Component/Ui/Share/EntDecken";
import {
  loremTwo,
  projectData,
  Leaderfreizeit,
  obenanData,
  LeaderfreizeitTwo,
  footerSecand,
  footerSecandNew,
} from "../../../mock";
import Filtern from "../../../Component/Ui/Share/Filtern";
import Freizeit from "../../../Component/Ui/Share/Freizeit";
import Obenan from "../component/Obenan";
import Footer from "../../../Component/Ui/Share/Footer";

const Leader = () => {
  return (
    <div>
      <EntDecken entDecken={loremTwo} />
      <Filtern projectData={projectData} />
      <Freizeit freizeit={Leaderfreizeit} />
      <Obenan obenanData={obenanData} />
      <Freizeit freizeit={LeaderfreizeitTwo} />
      <Footer footerOne={footerSecand} footerSecandNew={footerSecandNew} />
    </div>
  );
};

export default Leader;
