import Oben from "../components/Oben";
import { obenData } from "../../../mock";
import Dieregion from "../components/Dieregion";
import DasLogo from "../components/DasLogo";
import DieZiele from "../components/DieZiele";
import Derverein from "../components/Derverein";

const Region = () => {
  return (
    <>
      <Oben obenData={obenData} />
      <Dieregion />
      <DasLogo />
      <DieZiele />
      {/* <Derverein /> */}
    </>
  );
};
export default Region;
