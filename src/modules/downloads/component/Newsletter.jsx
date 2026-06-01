import React from "react";

const Newsletter = ({ newsletter }) => {
  return (
    <>
      <div className="font-Nunito pb-50 max-md:pb-10">
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
                  <div key={item.id}>
                    <p className="flex items-center pb-3">
                      <Icon className="text-[#936aab] w-10 h-10" />
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              {newsletter.button.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="relative inline group">
                    {
                      <div>
                        <button
                          className="bg-[#936aab] text-white w-[80%] max-md:w-full px-2 py-2 mt-3 font-medium 
                        flex items-center"
                        >
                          <Icon />
                          <p className="pl-10">{item.text}</p>
                        </button>
                      </div>
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
          <div className="ml-25 mt-15 max-md:ml-5 max-md:mt-5 ">
            <h1 className="text-gray-600 text-xl w-[50%] max-md:w-[100%] max-md:mb-5">
              Sie möchten gerne unseren Newsletter regelmäßig per E-Mail
              erhalten? Dann melden Sie sich hier bitte an:
            </h1>
            <div className="max-md:flex max-md:flex-col max-md:gap-5 pt-6 ">
              {newsletter.input.map((item) => {
                return (
                  <input
                    key={item.id}
                    type="text"
                    placeholder={item.name}
                    className="border pt-5 w-[32%] mr-3 max-md:w-[95%]"
                  />
                );
              })}
              <button className="bg-[#575757] mt-5 hover:bg-blue-700 text-white font-semibold py-2 px-4 transition duration-200">
                Click Me
              </button>
            </div>
            <div className="pt-10">
              <h1 className="text-gray-600 text-xl w-[50%] max-md:w-[100%] max-md:mb-5">
                Sie möchten gerne vom Newsletter abmelden?
              </h1>
              <div className="pt-4">
                <div className="flex justify-start items-center max-md:flex-col gap-8">
                  <input
                    type="text"
                    placeholder="E-Mail"
                    className="border pt-5 w-[32%]  max-md:w-[95%]"
                  />
                  <button className="bg-[#575757]  hover:bg-blue-700 text-white font-semibold py-2 px-4 transition duration-200">
                    Click Me
                  </button>
                </div>
                <div className="pt-2 flex gap-4">
                  <input type="checkbox" className="w-4" />
                  <p>vom Newsletter abmelden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
