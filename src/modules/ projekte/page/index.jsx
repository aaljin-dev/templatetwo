import React from "react";
import EntDecken from "../../../Component/Ui/Share/EntDecken";
import { lorem, projectData } from "../../../mock";
import Filtern from "../../../Component/Ui/Share/Filtern";
import Freizeit from "../../../Component/Ui/Share/Freizeit";
import { freizeit } from "../../../mock";

const Projekte = () => {
  return (
    <>
      <EntDecken entDecken={lorem} />
      <Filtern projectData={projectData} />
      <Freizeit freizeit={freizeit} />
    </>
  );
};

export default Projekte;
