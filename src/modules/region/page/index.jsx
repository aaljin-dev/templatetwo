import Oben from "../components/Oben";
import { obenData } from "../../../mock";
import Dieregion from "../components/Dieregion";
import DasLogo from "../components/DasLogo";
import DieZiele from "../components/DieZiele";
import Derverein from "../components/Derverein";
import Footer from "../../../Component/Ui/Share/Footer";
import { footerSecand } from "../../../mock";
import { footerSecandNew } from "../../../mock";

const Region = () => {
  return (
    <>
      <Oben obenData={obenData} />
      <Dieregion />
      <DasLogo />
      <DieZiele />
      <Derverein />
      <Footer footerOne={footerSecand} footerSecandNew={footerSecandNew} />
    </>
  );
};
export default Region;
