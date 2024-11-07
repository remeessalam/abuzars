const SectionSeven = () => {
  return (
    <div className="flex flex-col items-center mt-20 md:w-[95%]  lg:w-[80%] text-white w-full mx-auto">
      <div className="w-full flex flex-col items-center md:items-start">
        <h3 className="text-[#F5F5F5] w-fit text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
          {"FAQS".toUpperCase()}
        </h3>
        <h2 className="text-[35px] text-center mt-18 md:mt-6 md:text-[54px] md:text-start  max-w-[90%] sm:max-w-[70%] md:leading-[65px]">
          Frequently asked
          <br /> questions
        </h2>
      </div>
      <div className="flex flex-col mt-10">
        <div className="flex flex-col items-center md:items-start md:flex-row">
          <div className="flex flex-col w-[90%] md:w-1/2 bg-[#08081b]">
            <div className="bg-aboutas-gradient h-[.5px]" />
            <div className=" py-5 px-3">
              <h4 className="font-medium">Does AI+ offer a free trial?</h4>
              <p className="text-xs text-[#BABCC6]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <div className="bg-aboutas-gradient h-[.5px]" />
          </div>
          <div className="flex flex-col w-[90%] md:w-1/2 bg-[#08081b]">
            <div className="bg-aboutas-gradient h-[.5px]" />
            <div className=" py-5 px-3">
              <h4 className="font-medium">
                Do you currently have open positions?
              </h4>
              <p className="text-xs text-[#BABCC6]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <div className="bg-aboutas-gradient h-[.5px]" />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start md:flex-row">
          <div className="flex flex-col w-[90%] md:w-1/2 bg-[#08081b]">
            <div className="bg-aboutas-gradient h-[.5px]" />
            <div className=" py-5 px-3">
              <h4 className="font-medium">What are the features of AI ?</h4>
              <p className="text-xs text-[#BABCC6]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <div className="bg-aboutas-gradient h-[.5px]" />
          </div>
          <div className="flex flex-col w-[90%] md:w-1/2 bg-[#08081b]">
            <div className="bg-aboutas-gradient h-[.5px]" />
            <div className=" py-5 px-3">
              <h4 className="font-medium">Do you offer discounts?</h4>
              <p className="text-xs text-[#BABCC6]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
            <div className="bg-aboutas-gradient h-[.5px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
