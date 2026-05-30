import React from "react";

const Freizeit = ({ freizeit }) => {
  return (
    <div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 borderr mx-10">
        {freizeit.map((item) => {
          return (
            <div key={item.id} className="">
              <h1 className="  pb-7 pt-2 pl-1 mb-5 borderr ">{item.title}</h1>
              <div
                className="h-[260px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundColor: "red",
                  backgroundBlendMode: "multiply",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Freizeit;
