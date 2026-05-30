import Oben from "../components/Oben";
import { obenData } from "../../../mock";
import Dieregion from "../components/Dieregion";
import DasLogo from "../components/DasLogo";
import DieZiele from "../../../Component/Ui/Share/DieZiele";
import Derverein from "../../../Component/Ui/Share/Derverein";
import Footer from "../../../Component/Ui/Share/Footer";
import { footerSecand } from "../../../mock";
import { footerSecandNew } from "../../../mock";
import { DerVerein } from "../../../mock";
import { dieZiele } from "../../../mock";

const Region = () => {
  return (
    <>
      <Oben obenData={obenData} />
      <Dieregion />
      <DasLogo />
      <DieZiele dieZiele={dieZiele} />
      <Derverein DerVerein={DerVerein} />
      <Footer footerOne={footerSecand} footerSecandNew={footerSecandNew} />
    </>
  );
};
export default Region;
