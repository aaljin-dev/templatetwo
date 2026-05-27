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

import wappenHalver from "./assets/images/Wappen-Halver (1).png";
import wappenHersche from "./assets/images/Wappen-Herscheid.png";
import wappenMeinez from "./assets/images/Wappen-Meinerzhagen.png";
import wappenSchalks from "./assets/images/Wappen-Schalksmuhle1.png";
import websiteDeine from "./assets/images/Website_deine_region_V2-94.png";

export const baseOne = {
  lineOne: "DEINE",
  linetwo: "REGION",
  linethree: "OBEN AN DER VOLME",
  backgroundImg: bannnerOneImage,
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

export const baseTwo = {
  lineOne: "DEINE",
  linetwo: "REGION",
  backgroundImg: bannnerOneImage,
};

export const obenData = {
  head: "Oben an der Volme",
  logo: [
    {
      id: 1,
      img: wappenHalver,
      name: "KIERSPE ›",
    },
    {
      id: 2,
      img: wappenHersche,
      name: "MEINERZHAGEN ›",
    },
    {
      id: 3,
      img: wappenMeinez,
      name: "SCHALKSMÜHLE ›",
    },
    {
      id: 4,
      img: wappenSchalks,
      name: "HERSCHEID ›",
    },
    {
      id: 5,
      img: websiteDeine,
      name: "HALVER ›",
    },
  ],
  para: [
    {
      id: 1,
      text: "Die Zusammenarbeit der fünf Kommunen hat ihren Ursprung im Jahr 2009 Oben an der VolmeMEINERZHAGEN ›KIERSPE ›HERSCHEID ›durch die „REGIONALE 2013“ in Südwestfalen. In diesem Zuge hatten sich die vier an der Volme liegenden Kommunen Meinerzhagen, Kierspe, Halver und Schalksmühle zusammengeschlossen, um gemeinsam ihre Region – und hierbei vor allem die Zentren– mit Hilfe städtebaulicher Projekte weiterzuentwickeln.",
    },
    {
      id: 2,
      text: "Um thematisch vielseitigere, aber auch kleinere Projekte in die gesamte Fläche zu bringen, bewarben sich die vier Kommunen im Jahr 2015 um das Förderprogramm LEADER. Mit Erfolg: Seit 2016 ist Oben an der Volme offi ziell LEADER-Region, wodurch Projekte in den Bereichen Stadt- und Dorfentwicklung, Tourismus, Wirtschaft und „starke Kinder“ mit Hilfe von 2,3 Mio. € Fördermitteln realisiert werden können.",
    },
    {
      id: 3,
      text: "Und nun steht schon das nächste gemeinsame Vorhaben an: Nachdem die letzten städtebaulichen Projekte aus der REGIONALE 2013 noch umgesetzt werden, ist bereits der Startschuss für die REGIONALE 2025 gefallen, bei der vor allem digitale Lösungen z.B. in den Bereichen Mobilität, Gesundheit, Bildung oder Tourismus für die Zukunftsgestaltung gesucht werden. ",
    },
    {
      id: 4,
      text: "Diese Chance wollen sich die Oben an der Volme-Kommunen natürlich nicht entgehen lassen! Sie werden wieder eine gemeinsame Bewerbung einreichen – und das natürlich mit breiter Mitwirkung aller Bürgerinnen und Bürger! Die Ideenwerkstätten dazu waren ein großer Erfolg. Dieses Mal ist auch die Gemeinde Herscheid mit von der Partie, die sich fortan an dem Zusammenschluss „Oben an der Volme“ beteiligt.",
    },
  ],
};
