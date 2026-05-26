import Footer from "../../../Component/Ui/Share/Footer";
import Aktuelle from "../components/Aktuelle";
import Die from "../components/Die";
import EntDecken from "../components/EntDecken";
import Immer from "../components/Immer";
import Neues from "../components/Neues";

const Startseite = () => {
  return (
    <>
      <EntDecken />
      <Aktuelle />
      <Neues />
      <Die />
      <Immer />
      <Footer />
    </>
  );
};
export default Startseite;
