import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

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
  const [click, setClick] = useState(false);
  console.log(click);

  return (
    <nav>
      <div className="w-full text-gray-500 h-45 flex justify-between items-center py-3 pl-5 pr-10 max-md:py-1 max-md:h-20">
        <ul className="flex gap-4 text-xl font-hfont max-md:hidden ">
          {NAV_MENU.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}>{item.key}</Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-md:block">
          <GiHamburgerMenu
            className="text-3xl"
            onClick={() => {
              setClick(!click);
            }}
          />
          {click && (
            <ul className="flex flex-col gap-4 text-xl font-hfont absolute top-20 left-0 w-full bg-white p-5 z-50">
              {NAV_MENU.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      onClick={() => {
                        setClick(!click);
                      }}
                      to={item.path}
                    >
                      {item.key}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="w-[13%] h-[90%] max-md:w-[15%] max-md:h-[100%]">
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
