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
      <div className="flex flex-col gap-5 mt-10">
        <div className="flex flex-col gap-5 items-center md:items-start md:flex-row">
          <div className="flex flex-col w-[90%] md:w-1/2 bg-[#08081b]">
            <div className="bg-aboutas-gradient h-[.5px]" />
            <div className=" py-5 px-3">
              <h4 className="font-medium">
                What services do you offer to help build an AI company?
              </h4>
              <p className=" text-[#BABCC6]">
                We provide end-to-end services, including AI strategy
                consultation, product development, business model creation, and
                market entry support. We guide you from ideation to product
                launch.
              </p>
            </div>
            <div className="bg-aboutas-gradient h-[.5px]" />
          </div>
          <div className="flex flex-col w-[90%] md:w-1/2 bg-[#08081b]">
            <div className="bg-aboutas-gradient h-[.5px]" />
            <div className=" py-5 px-3">
              <h4 className="font-medium">
                Do I need technical knowledge to start an AI company?
              </h4>
              <p className=" text-[#BABCC6]">
                No, you don’t need technical expertise. Our team of AI experts
                will handle the technical aspects while you focus on the
                business vision and strategy.
              </p>
            </div>
            <div className="bg-aboutas-gradient h-[.5px]" />
          </div>
        </div>
        <div className="flex flex- gap-5 items-center md:items-start md:flex-row">
          <div className="flex flex-col w-[90%] md:w-1/2 bg-[#08081b]">
            <div className="bg-aboutas-gradient h-[.5px]" />
            <div className=" py-5 px-3">
              <h4 className="font-medium">
                How long does it take to launch an AI product?
              </h4>
              <p className=" text-[#BABCC6]">
                The timeline varies, but typically it takes 3 to 6 months to
                develop a Minimum Viable Product (MVP) and begin the launch
                process.
              </p>
            </div>
            <div className="bg-aboutas-gradient h-[.5px]" />
          </div>
          <div className="flex flex-col w-[90%] md:w-1/2 bg-[#08081b]">
            <div className="bg-aboutas-gradient h-[.5px]" />
            <div className=" py-5 px-3">
              <h4 className="font-medium">
                How do I know if my AI idea is feasible?
              </h4>
              <p className=" text-[#BABCC6]">
                We offer an initial consultation to evaluate your idea&rsquo;s
                feasibility, its market potential, and provide feedback on how
                to refine it for success.
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
