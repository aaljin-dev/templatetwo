import Oben from "../components/Oben";
import { obenData } from "../../../mock";
import Dieregion from "../components/dieregion";

const Region = () => {
  return (
    <>
      <Oben obenData={obenData} />
      <Dieregion />
    </>
  );
};
export default Region;
