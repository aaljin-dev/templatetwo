import Footer from "../../../Component/Ui/Share/Footer";
import Aktuelle from "../components/Aktuelle";
import Die from "../components/Die";
import EntDecken from "../components/EntDecken";
import Immer from "../components/Immer";
import Neues from "../components/Neues";
import { footerOne } from "../../../mock";

const Startseite = () => {
  return (
    <>
      <EntDecken />
      <Aktuelle />
      <Neues />
      <Die />
      <Immer />
      <Footer footerOne={footerOne} />
    </>
  );
};
export default Startseite;
