import { FaChevronRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

import bannnerOneImage from "./assets/images/Slider-scaled.jpg";
import bannerImageOne from "./assets/images/banner1.png";
import bannerImageTwo from "./assets/images/banner2.png";
import bannerImageThree from "./assets/images/banner3.png";

import KeinKind from "./assets/images/Kein-Kind.jpg";
import keinKindtwo from "./assets/images/one2.png";
import Notfalldosen from "./assets/images/Notfalldosen.jpg";

import neuseImg from "./assets/images/Freizeit-und-Naherholungsbeauftragter_Bild-3.jpg";

import dieImg from "./assets/images/Nachhaltig-mobil.jpg";

import footer1 from "./assets/images/footer1.png";
import footer2 from "./assets/images/footer3.png";
import footer3 from "./assets/images/footer4.png";
import footer4 from "./assets/images/footer5.png";
import footer5 from "./assets/images/footer6.png";

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

export const NeuesData = [
  {
    id: 1,
    img: neuseImg,
    head: "Wanderung Oben an der Volme",
    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,",
  },
  {
    id: 2,
    img: neuseImg,
    head: "Wanderung Oben an der Volme",
    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,",
  },
  {
    id: 3,
    img: neuseImg,
    head: "Wanderung Oben an der Volme",
    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,",
  },
  {
    id: 4,
    img: neuseImg,
    head: "Wanderung Oben an der Volme",
    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,",
  },
];

export const dieData = {
  head: "Die nächsten Termin",
  img: dieImg,
  subHead: [
    {
      id: 1,
      headOne: "1. August - 13. September 2019",
      headParaOne:
        "Projektaufrufrunde vom 1. August bis zum 13. September 2019",
      headParaTwo:
        "Damit Projekte durch die Lokale Aktionsgruppe beschlossen werden können,müssen Projektträger ihre Ideen innerhalb der Projektaufrufrunde einreichen",
      headParathree: "mehr",
      Icon: MdKeyboardArrowRight,
    },
    {
      id: 2,
      headOne: "08. Oktober 2019",
      headParaOne: "Sitzung der Lokalen Aktionsgruppe",
      headParaTwo:
        "am 08.10.2019, auf der beschlossen wird, welche Projekte im Rahmen von",
      headParathree: "mehr",
      Icon: MdKeyboardArrowRight,
    },
  ],
};

export const footerOne = [
  {
    id: 1,
    img: footer1,
  },
  { id: 2, img: footer2 },
  {
    id: 3,
    img: footer3,
  },
  {
    id: 4,
    img: footer4,
  },
  {
    id: 5,
    img: footer5,
  },
];
