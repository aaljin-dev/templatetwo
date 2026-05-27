import React from "react";

const EntDecken = () => {
  return (
    <div>
      <div
        className="min-h-[450px] bg-[#8E6BA7] text-white flex justify-center items-center gap-9 pt-20 
      max-md:flex-col  max-md:pt-5"
      >
        <div className="text-4xl max-w-[500px] px-4">
          <h1>Entdecken Sie die Region Oben an der Volme!</h1>
        </div>
        <div className="w-0.5 h-70  bg-white max-md:hidden"></div>
        <div className="text-[19px] w-6/12 max-md:w-10/12">
          <p className="pb-5">
            „Werte schöpfen – gemeinsam Zukunft gestalten!“ – unter diesem Motto
            haben sich die fünf Kommunen Herscheid, Meinerzhagen, Kierspe,
            Halver und Schalksmühle im Märkischen Kreis zusammengeschlossen, um
            die Re- gion „Oben an der Volme“ aktiv zu gestalten.
          </p>
          <p className="pb-5">
            Hierbei sind sie nicht allein: Zahlreiche Bürger, ehrenamtliche
            Initiativen, Vereine, Institutionen und Unternehmen setzen sich mit
            Kreativität, Fleiß und Leidenschaft für ihre Region ein.
          </p>
          <p className="pb-5">
            Deutlich sichtbar wird dieses Engagement in den zahlreichen
            Projekten, die die Lebensqualität vor Ort entscheidend steigern und
            die wir Ihnen auf die- ser Homepage vorstellen möchten. Schauen Sie
            selbst!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntDecken;
