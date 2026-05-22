import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="w-full border border-red-800 text-gray-600 h-35 flex justify-between items-center pl-3 pr-10">
        <div className=" flex ">
          <p className="border-r px-4">Startseite</p>
          <p className="border-r px-4">Region & Ziele</p>
          <p className="border-r px-4">Projekte</p>
          <p className="border-r px-4">Leader</p>
          <p className="border-r px-4">Regionale</p>
          <p className="border-r px-4">Downloads/Link</p>
          <p className="px-4">Kontakt</p>
        </div>
        <div className="border w-[10%] h-[80%]">
          <img
            src="../src/assets/images/logo.png"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
