import React from "react";

const Newsletter = ({ newsletter }) => {
  return (
    <>
      <div className="font-Nunito ">
        <div className="py-2 border-b border-gray-400 mt-15 mx-25 text-gray-500">
          <h1 className="text-4xl font-bold">{newsletter.head}</h1>
        </div>
        <div className="flex w-[100%] max-md:flex-col justify-center gap-10 mt-8 ">
          <div className="w-[60%] h-[360px] max-md:w-full px-2">
            <img
              src={newsletter.img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col w-[25%] max-md:w-full max-md:items-center justify-between font-Nunito font-bold text-xl">
            <div className="mt-3 text-gray-500">
              {newsletter.letter.map((item) => {
                const Icon = item.icon;
                return (
                  <p className="flex items-center pb-3">
                    <Icon className="text-[#936aab] w-10 h-10" />
                    {item.text}
                  </p>
                );
              })}
            </div>
            <div>
              {newsletter.button.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="relative inline group">
                    {
                      <>
                        <button
                          className="bg-[#936aab] text-white w-[80%] max-md:w-full px-2 py-2 mt-3 font-medium 
                        flex items-center"
                        >
                          <Icon />
                          <p className="pl-10">{item.text}</p>
                        </button>
                      </>
                    }

                    {/* <div
                      className="absolute left-0 mt-2 hidden min-w-48 rounded-md 
                            border bg-white shadow-lg group-hover:block z-10"
                    >
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Konzept 2025
                      </a>

                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Projektflyer
                      </a>

                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Weitere Links
                      </a>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>
              Sie möchten gerne unseren Newsletter regelmäßig per E-Mail
              erhalten? Dann melden Sie sich hier bitte an:
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
