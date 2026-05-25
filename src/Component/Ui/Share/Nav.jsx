import React from "react";
import { Link } from "react-router-dom";

const NAV_MENU = [
  {
    id: 1,
    key: "Startseite",
    path: "/",
  },
  {
    id: 2,
    key: "Region & Ziele",
    path: "/region-ziele",
  },
  {
    id: 3,
    key: "Projekte",
    path: "/projekte",
  },
  {
    id: 4,
    key: "Leader",
    path: "/leader",
  },
  {
    id: 5,
    key: "Regionale",
    path: "/regionale",
  },
  {
    id: 6,
    key: "Downloads/Links",
    path: "/downloads-links",
  },
  {
    id: 7,
    key: "Kontakt",
    path: "/kontakt",
  },
];

const Nav = () => {
  return (
    <nav>
      <div className="w-full text-gray-500 h-45 flex justify-between items-center py-3 pl-5 pr-10  border">
        <ul className="flex gap-4 text-xl font-hfont">
          {NAV_MENU.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}>{item.key}</Link>
              </li>
            );
          })}
        </ul>
        <div className="border w-[13%] h-[90%]">
          <img
            src="../src/assets/images/logo.png"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
