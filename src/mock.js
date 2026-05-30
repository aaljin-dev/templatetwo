import { FaChevronRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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

import dieRegionImg from "./assets/images/map.png";

import daslogo from "./assets/images/Logo_Umriss.png";

import bannerfour from "./assets/images/banner4.png";

import Nachhaltig from "./assets/images/Nachhaltig-mobil.jpg";

import Seen from "./assets/images/Sauerland-Seen.jpg";

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

export const dieRegion = {
  img: dieRegionImg,
  head: "DIE REGION",
  paraOne:
    "In den fünf Kommunen leben rund 70.000 Menschen auf einer Gesamtfl äche von 362 km². Die funktionalen Verfl echtungen bestehen in der ähnlichen Wirtschaftsstruktur, der Historie der Industriekultur und dem heute noch starken produzierenden Gewerbe, welches vor allem durch eine Vielzahl an mittelständischen Unternehmen geprägt ist. Die hiesigen Unternehmen tragen mit ihrem Erfolg entscheidend zur Wirtschaftskraft Südwestfalens bei, welche die stärkste Wirtschaftsregion des Landes NRW darstellt. Die Region ist zudem geprägt durch die Land- und Forstwirtschaft mit einem Schwerpunkt in der Milchviehwirtschaft. ",
  paraTwo:
    "Es bestehen strukturell-organisatorische Verknüpfungen wie ein gemeinsames Kulturmanagement, eine gemeinsame Volkshochschule, eine Musikschule und weitere Formen der Zusammenarbeit, die zum Teil im Rahmen der REGIONALE 2013 gewachsen sind, teilweise aber auch schon länger bestehen",
};

export const dasLogo = {
  img: daslogo,
  head: "DAS LOGO",
  text: [
    {
      id: 1,
      para: "Sie haben sich schon mal gefragt, wie es dazu kommt, dass das Logo der Region Oben an der Volme ein Hase ist? Schauen Sie sich den Umriss der Stadtgebiete der vier Gründerkommunen der Region Oben an der Volme an. Mit ein wenig Kreativität können Sie nun erkennen, dass die Stadtgrenzen der Kommunen – graphisch zusammengesetzt – die Figur eines Hasen ergeben.",
    },
    {
      id: 2,
      para: "Umriss der Stadtgebiete",
    },
    {
      id: 3,
      para: "Diese Erkenntnis war die Grundlage für einen Wettbewerb, der 2013 im Zuge der REGIONALE stattfand und dazu aufrief, Entwürfe für ein entsprechendes Hasenlogo einzureichen. Unser heutiges Logo ist aus diesem Wettbewerb als Gewinner hervorgegangen. Die Dokumentation des damaligen Wettbewerbs fi nden Sie hier.",
    },
    {
      id: 4,
      para: "Der Hase soll jedoch nicht nur für die Umrisse der Kommunen stehen, sondern auch im Sinne der zahlreichen Entwicklungsmaßnahmen in der Region z.B. durch die REGIONALE und LEADER und die dadurch erzeugte Aufbruchsstimmung „Frühling“ und „Neuanfang“ symbolisieren.",
    },
  ],
};

export const dieZiele = {
  head: "Die Ziele",
  textOne:
    "Damit diese Vorstellungen Realität bleiben bzw. werden, werden Projekte vor allem in den folgenden Handlungsfeldern mit Hilfe von Förderprogrammen oder aber durch die Eigeninitiative der Aktiven umgesetzt:",
  textTwo:
    "Das oberste Ziel der hiesigen Regionalentwicklung ist es, die Lebensqualität vor Ort zu erhalten bzw. zu steigern. Konkret ergeben sich daraus folgende Zielvorstellungen:",
  para: [
    {
      id: 1,
      img: bannerImageOne,
      bg: "#9369aa",
      head: "Städte und Dörfer",
      icon: MdKeyboardArrowRight,
      text: "Die Bürgerinnen und Bürger fühlen sich in der Region wohl. Sie sind mit ihrer Wohnsituation zufrieden und profi tieren von attraktiven Zentren mit Aufenthaltsqualität sowie zahlreichen Freizeitangeboten. Von Einkaufs-, Bildungs- oder Betreuungsmöglichkeiten bis hin zu Gesundheitsangeboten, alles ist in der Region vorhanden oder gut für jeden, egal ob Groß oder",
    },
    {
      id: 2,
      img: bannerImageTwo,
      bg: "#fcc300",
      head: " Kultur",
      icon: MdKeyboardArrowRight,
      text: "Die Besucher und Tagestouristen verbringen gerne Zeit in der Region Oben an der Volme. Vielfältige und qualitativ hochwertige Freizeit- und Kulturangebote locken in eine reizvolle Landschaft mit wahren Naturschätzen, weitreichenden Waldgebieten und zahlreichen Talsperren. Egal ob Familienmensch, Kulturliebhaber, Naturgenießer oder Abenteuersucher, hier ist für jeden etwas dabei!",
    },
    {
      id: 3,
      img: bannerfour,
      bg: "#93a6ba",
      head: "Wirtschaft",
      icon: MdKeyboardArrowRight,
      text: "Die Unternehmen schätzen Oben an der Volme als Wirtschaftsstandort, der ihnen die nötige Infrastruktur, die entsprechenden Flächen und die passende Ausstattung bietet. Fachkräfte können für das moderne und vielfältige Arbeitsplatzangebot inmitten dieser lebenswerten Region leicht gewonnen werden.",
    },
  ],
};

export const DerVerein = {
  head: "DER VEREIN",
  bgImg: Nachhaltig,
  para: [
    {
      id: 1,
      text: "Die einzelnen Kräfte werden organisatorisch gebündelt im Verein „Regionalentwicklung Oben an der Volme e.V.“. Dieser setzt sich für die Förderung der Entwicklung in der Region ein und beherbergt sowohl die Kommunen wie auch zahlreiche Vereine, Verbände, Institutionen wie auch Bürgerinnen und Bürger aus der Region. Die einzige Voraussetzung ist, dass die Mitglieder aus der Region kommen oder aber durch ihr Handeln in die Region hineinwirken bzw. für die Zielerreichung von zentraler Bedeutung sind. Die Mitgliedschaft ist außerdem kostenfrei.",
    },
    {
      id: 2,
      text: "Sie haben Interesse an einer Mitgliedschaft im Verein? Hier gelangen Sie zur Eintrittserklärung.",
    },
    {
      id: 3,
      text: "Zusätzlich umfasst der Verein verschiedene Aktionsgruppen, die sich speziell um ein bestimmtes Thema kümmern: Die Lokale Aktionsgruppe, die die Projektauswahl im LEADER-Prozess tri� t, sowie die Kultur- als auch die Tourismus-Aktionsgruppe, welche die kulturellen und touristischen Belange der Region im Fokus haben.",
    },
  ],
};

export const footerSecand = [
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
export const footerSecandNew = {
  like: BiSolidLike,
  text: "Getfalt mir 454",
};

export const baseThree = {
  lineOne: "UNSERE",
  linetwo: "PROJEKTE",
  backgroundImg: bannnerOneImage,
  lineOneCol: "#936aab",
  linetwoCol: "#2fb8bd",
};

export const entDecken = {
  head: "Entdecken Sie die Region Oben an der Volme!",
  para: [
    {
      id: 1,
      text: "„Werte schöpfen – gemeinsam Zukunft gestalten!“ – unter diesem Motto haben sich die fünf Kommunen Herscheid, Meinerzhagen, Kierspe, Halver und Schalksmühle im Märkischen Kreis zusammengeschlossen, um die Re- gion „Oben an der Volme“ aktiv zu gestalten.",
    },
    {
      id: 2,
      text: "Hierbei sind sie nicht allein: Zahlreiche Bürger, ehrenamtliche Initiativen, Vereine, Institutionen und Unternehmen setzen sich mit Kreativität, Fleiß und Leidenschaft für ihre Region ein.",
    },
    {
      id: 3,
      text: "Deutlich sichtbar wird dieses Engagement in den zahlreichen Projekten, die die Lebensqualität vor Ort entscheidend steigern und die wir Ihnen auf die- ser Homepage vorstellen möchten. Schauen Sie selbst!",
    },
  ],
};

export const lorem = {
  head: "Lorem ipsum sit dolor",
  para: [
    {
      id: 1,
      text: "Die Zusammenarbeit der fünf Kommunen hat ihren Ursprung im Jahr 2009durch die „REGIONALE 2013“ in Südwestfalen. In diesem Zuge hatten sichdie vier an der Volme liegenden Kommunen Meinerzhagen, Kierspe, Halverund Schalksmühle zusammengeschlossen, um gemeinsam ihre Region –und hierbei vor allem die Zentren– mit Hilfe städtebaulicher Projekte weiterzuentwickeln. ",
    },
    {
      id: 2,
      text: "Um thematisch vielseitigere, aber auch kleinere Projekte in die gesamte Fläche zu bringen, bewarben sich die vier Kommunen im Jahr 2015 um dasFörderprogramm LEADER. Mit Erfolg: Seit 2016 ist Oben an der Volme of",
    },
  ],
};

export const projectData = {
  headOne: "kommune",
  headTwo: "foerderprogramm",
  headThree: "handlungsfelder",

  kommune: [
    { kommune: "Halver" },
    { kommune: "Schalksmühle" },
    { kommune: "Herscheid" },
    { kommune: "Kierspe" },
    { kommune: "Meinerzhagen" },
  ],

  foerderprogramm: [
    { foerderprogramm: "LEADER" },
    { foerderprogramm: "REGIONALE 2025" },
    { foerderprogramm: "EFRE NRW" },
    { foerderprogramm: "Dorferneuerung" },
  ],

  handlungsfelder: [
    { handlungsfeld: "Starke Kinder-starke Region" },
    { handlungsfeld: "Nachhaltiger Wirtschaftsstandort" },
    { handlungsfeld: "Lebenswerte Städte und Dörfer" },
  ],
};

export const freizeit = {
  data: [
    {
      id: 1,
      title: "Freizeit- und Naherholungsbeauftragter",
      titlebg: "#fcc300",
      icon: FaAngleDown,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    },
    {
      id: 2,
      title: "Kein Kind zurücklassen - von Anfang an!",
      titlebg: "#31b7bc",
      icon: FaAngleDown,
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200",
    },
    {
      id: 3,
      title: "Notfalldosen Oben an der Volme",
      titlebg: "#9369aa",
      icon: FaAngleDown,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
    },
    {
      id: 4,
      title: "Naturerlebnis Volmetal",
      titlebg: "#fcc300",
      icon: FaAngleDown,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
    },
    {
      id: 5,
      title: "Digitales Dorfzentrum",
      titlebg: "#31b7bc",
      icon: FaAngleDown,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
    },
    {
      id: 6,
      title: "Nachhaltige Mobilität Volmetal",
      titlebg: "#9369aa",
      icon: FaAngleDown,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    },
  ],
  dataIcon: FaAngleDown,
};

export const baseFour = {
  lineOne: "UNSERE",
  linetwo: "PROJEKTE",
  backgroundImg: Seen,
  lineOneCol: "#936aab",
  linetwoCol: "#2fb8bd",
};

export const loremTwo = {
  head: "Lorem ipsum sit dolor",
  para: [
    {
      id: 1,
      text: "Lorem ipsum sit dolordurch die „REGIONALE 2013“ in Südwestfalen. In diesem Zuge hatten sich die vier an der Volme liegenden Kommunen Meinerzhagen, Kierspe, Halver und Schalksmühle zusammengeschlossen, um gemeinsam ihre Region – und hierbei vor allem die Zentren– mit Hilfe städtebaulicher Projekte weiterzuentwickeln. ",
    },
    {
      id: 2,
      text: "Um thematisch vielseitigere, aber auch kleinere Projekte in die gesamte Fläche zu bringen, bewarben sich die vier Kommunen im Jahr 2015 um das Förderprogramm LEADER. Mit Erfolg: Seit 2016 ist Oben an der Volme of",
    },
  ],
};

export const Leaderfreizeit = {
  data: [
    {
      id: 1,
      title: "Freizeit- und Naherholungsbeauftragter",
      titlebg: "#fcc300",
      icon: FaAngleDown,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    },
    {
      id: 2,
      title: "Kein Kind zurücklassen - von Anfang an!",
      titlebg: "#31b7bc",
      icon: FaAngleDown,
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200",
    },
  ],
};

export const obenanData = {
  paraData: [
    {
      text: `Oben an der Volme ist eine spannende Region zum Erleben und Erholen – doch wie viel die Region tatsächlich zu bieten hat, wissen die Volmetaler selbst oft nicht. Das will der Freizeit- und Naherholungsbeauftragte ändern!`,
    },

    {
      text: `Früher wurden die Bereiche Freizeit und Naherholung dezentral in den vier Kommunen durch zum Teil fachfremdes Personal bearbeitet. Doch seit September 2017 setzt sich Ralf Thebrath als Freizeit- und Naherholungsbeauftragter (kurz genannt „FuN-Manager“) dafür ein, dass die Region als Ganzes attraktiver wird.`,
    },

    {
      text: `Wie das geht? Zum einen, indem bestehende Angebote qualifiziert, vernetzt und beworben werden. Und zum anderen, indem neue Angebote angestoßen werden und so die Vielfalt erweitert wird. Wichtig dabei: Zeigen, was man hat und was man kann – und das auf eine sympathische und authentische Art und Weise. So kamen auch Werbesprüche wie „Die Talsperre ist unsere Südsee!“ oder „Der Wanderweg ist unsere Straße!“ zustande.`,
    },

    {
      text: `Grundlegendes Ziel des Projekts ist es, die Bedürfnisse der Bevölkerung nach Naherholung und Freizeitangeboten zu befriedigen. Gleichwohl werden auch Tagesbesucher aus dem Ruhrgebiet und dem Rheinland über die (neuen) Bahnverbindungen als auch über die gute Verkehrsanbindung an die Autobahn A45 erwartet. Langfristig geht es darum, sowohl die Attraktivität als auch die Lebens- und Standortqualität der Region durch eine professionelle Vermarktung nachhaltig zu steigern und das Image der Region zu verbessern.`,
    },

    {
      text: `Die Kontaktdaten des Freizeit- und Naherholungsbeauftragten finden Sie hier.`,
    },
  ],

  paraRight: [
    {
      head: "Status des Projekts:",
      para: "Förderung bewilligt und in der Umsetzung",
    },

    {
      head: "Projektträger:",
      para: "Regionalentwicklung Oben an der Volme e.V.",
    },

    {
      head: "Ort der Umsetzung:",
      para: "Meinerzhagen, Kierspe, Halver, Schalksmühle",
    },

    {
      head: "Geplanter Zeitraum:",
      para: "2017-2021",
    },

    {
      head: "Projektkosten:",
      para: "ca. 348.700 € (65 % gefördert durch LEADER)",
    },

    {
      head: "Handlungsfeld:",
      para: "Freizeit & Tourismus",
    },
  ],
};

export const LeaderfreizeitTwo = {
  data: [
    {
      id: 3,
      title: "Notfalldosen Oben an der Volme",
      titlebg: "#9369aa",
      icon: FaAngleDown,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
    },
    {
      id: 4,
      title: "Naturerlebnis Volmetal",
      titlebg: "#fcc300",
      icon: FaAngleDown,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
    },
    {
      id: 5,
      title: "Digitales Dorfzentrum",
      titlebg: "#31b7bc",
      icon: FaAngleDown,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
    },
    {
      id: 6,
      title: "Nachhaltige Mobilität Volmetal",
      titlebg: "#9369aa",
      icon: FaAngleDown,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    },
  ],
  dataIcon: FaAngleDown,
};

export const baseFive = {
  lineOne: " REGIONALE",
  linetwo: "IN NRW",
  backgroundImg: Seen,
  lineOneCol: "#936aab",
  linetwoCol: "#31b7bc",
};

export const dieRegionaleLorm = {
  head: "Die REGIONALEN in NRW",
  para: [
    {
      id: 1,
      text: `Die Oben an der Volme-Kommunen hatten sich im Rahmen der REGIONALE 
            2013 zusammengeschlossen und ein gemeinsames Konzept (Verlinkung auf 
            das RIEHK im Downloadbereich) eingereicht, um sich an dem Strukturförder
            programm zu beteiligen – mit Erfolg! Sie wurden mit dem dritten Stern ausge
            zeichnet und konnten in die Umsetzung ihrer Projekte gehen.`,
    },
    {
      id: 2,
      text: `Ziel des 2011 erstellten Konzepts: Das obere Volmetal als eine lebendige Regi
            on mit starken Zentren zukunftsfähig zu entwickeln. Dazu gehörten insbeson
            dere die folgenden Zielsetzungen:.`,
    },
    {
      id: 3,
      text: `Allerdings bekommt man die Fördergelder nicht umsonst: Eingereichte Pro
            jekte müssen einen Qualifi zierungsprozess durchlaufen und den aufgestell
            ten Kriterien der jeweiligen REGIONALE entsprechen. Wird ein Projekt nicht 
            nur mit dem ersten und zweiten, sondern sogar mit dem dritten Stern aus
            gezeichnet, ist die Umsetzungsreife erreicht und die Förderung gesichert.`,
    },
    {
      id: 4,
      text: `Weiterführende Informationen zur REGIONALE fi nden Sie hier`,
    },
  ],
};

export const regionaleData = {
  bgImage:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",

  titleSection: {
    title: "Die REGIONALE 2013",
    bgColor: "#f5c400",
  },

  topContent: {
    bgColor: "#9a73b3",
    para: [
      {
        id: 1,
        text: `Die Oben an der Volme-Kommunen hatten sich im Rahmen der REGIONALE 2013 zusammengeschlossen und ein gemeinsames Konzept (Verlinkung auf das RIEHM im Downloadbereich) eingereicht, um sich an dem Strukturförderprogramm zu beteiligen – mit Erfolg! Sie wurden mit dem dritten Stern ausgezeichnet und konnten in die Umsetzung ihrer Projekte gehen.`,
      },

      {
        id: 2,
        text: `Ziel des 2011 erstellten Konzepts: Das obere Volmetal als eine lebendige Region mit starken Zentren zukunftsfähig zu entwickeln. Dazu gehörten insbesondere die folgenden Zielsetzungen:`,
      },
    ],
  },

  listSection: {
    bgColor: "#f5c400",
    textColor: "#ffffff",

    items: [
      {
        id: 1,
        icon: MdOutlineKeyboardArrowRight,
        text: "die Bewältigung des demografischen Wandels",
      },

      {
        id: 2,
        text: "Wahrung und Steigerung der Lebensqualität",
      },

      {
        id: 3,
        text: "Verbesserung der Mobilität",
      },

      {
        id: 4,
        text: "Nachhaltige Siedlungsentwicklung",
      },

      {
        id: 5,
        text: "Erwirtschaftung der Zukunftsfähigkeit der Region.",
      },
    ],
  },

  bottomContent: {
    bgColor: "#9a73b3",
    textColor: "#ffffff",

    para: [
      {
        id: 1,
        text: `Um diese Ziele zu erreichen, wurden damals elf Leitprojekte ausgewählt, die 
            mittlerweile größtenteils umgesetzt worden sind. Diese hatten ihren Fokus vor 
            allem im Bereich der Entwicklung der Zentren, zum Beispiel durch die Umge
            staltung von Stadt- und Freiräumen. Es wurden darüber hinaus auch verbin
            dende Projekte in das Konzept integriert wie beispielsweise die Reaktivierung 
            der Volmetalbahn.`,
      },
      {
        id: 2,
        text: `Eine Auswahl der größten Projekte aus der REGIONALE 2013 fi nden Sie hier 
            (Verlinkung auf die Projektübersicht mit der voreingestellten Filterfunktion, 
            dass nur die REGIONALE-Projekte gezeigt werden).`,
      },
    ],
  },
};
