import { FaChevronRight } from "react-icons/fa";

import bannnerOneImage from "./assets/images/Slider-scaled.jpg";
import bannerImageOne from "./assets/images/banner1.png";
import bannerImageTwo from "./assets/images/banner2.png";
import bannerImageThree from "./assets/images/banner3.png";

import KeinKind from "./assets/images/Kein-Kind.jpg";
import keinKindtwo from "./assets/images/one2.png";
import Notfalldosen from "./assets/images/Notfalldosen.jpg";

export const baseOne = {
  lineOne: "DEINE",
  linetwo: "REGION",
  linethree: "OBEN AN DER VOLME",
  img: [bannerImageOne, bannerImageTwo, bannerImageThree, bannnerOneImage],
};

export const AktuelleData = [
  {
    id: 1,
    img: KeinKind,
    head: "Kein Kind zurücklassen - von Anfang an!",
    para: "Oben an der Volme ist eine spannende Region zum Erleben und Erholen – doch wie viel die Region tatsächlich zu bieten hat...",
    con: "mehr",
    icon: FaChevronRight,
    imgBack: "#299a9e",
    colback: "#31b7bc",
  },
  {
    id: 2,
    img: keinKindtwo,
    head: "Freizeit- und Naherholungsbeauftragter",
    para: "Oben an der Volme ist eine spannende Region zum Erleben und Erholen – doch wie viel die Region tatsächlich zu bieten hat...",
    con: "mehr",
    icon: FaChevronRight,
    imgBack: "#eab500",
    colback: "#fcc300",
  },
  {
    id: 3,
    img: Notfalldosen,
    head: "Notfalldosen Oben an der Volme",
    para: "In Dahlerbrück befi  ndet sich der „Glörpark“. Aufgrund seiner zentralen Lage bietet er beste Voraussetzungen für einen Ort der Begegnung…",
    con: "mehr",
    icon: FaChevronRight,
    imgBack: "#78568b",
    colback: "#9369aa",
  },
];
