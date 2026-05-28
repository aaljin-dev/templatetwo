import React from "react";
import { DerVerein } from "../../../mock";

const Derverein = () => {
  return (
    <div>
      <div
        className="borderr h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
          backgroundColor: "#185c5f",
          backgroundBlendMode: "multiply",
        }}
      >
        <div>
          <div>
            <h1>{DerVerein.head}</h1>
          </div>
          <div>
            {DerVerein.para.map((item) => {
              return <p key={item.id}>{item.text}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Derverein;
