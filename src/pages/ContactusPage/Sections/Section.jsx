import homeicon from "../../../assets/images/contactuspagebg.jpeg";
import faidedmessage from "../../../assets/svg/faidedmessage.svg";
import faidedphone from "../../../assets/svg/faidedphone.svg";
import roundedfacebook from "../../../assets/svg/roundedfacebook.svg";
import roundedtwitter from "../../../assets/svg/roundedtwitter.svg";
import roundedinstagram from "../../../assets/svg/roundedinstagram.svg";
import roundedlinkedin from "../../../assets/svg/roundedlinkedin.svg";
import Button from "../../../component/Button/Button";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div
      // md:w-[95%] lg:w-[80%]
      className="flex w-full text-white mx-auto min-h-[90vh] bg-cover bg-center py-7"
      style={{ backgroundImage: `url(${homeicon})` }}
    >
      <div className="flex lg:flex-row flex-col gap-9 lg:gap-0  justify-centern items-center w-[90%] mx-auto">
        <div className="w-full flex flex-col lg:items-start items-center lg:w-1/2">
          <h3 className="w-fit text-[#F5F5F5] text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
            {"Contact us".toUpperCase()}
          </h3>

          <h2 className="text-[35px] mt-12 md:mt-5 md:text-[54px]  text-center sm:text-start leading-[30px] max-w-[90%] sm:max-w-[70%] md:leading-[55px]">
            Get in touch
            <br /> with us today
          </h2>
          <p className="sm:px-0 px-2 sm:max-w-[55%] mt-[15px] text-center sm:text-start text-base text-[#BABCC6]">
            Connect with us today to discover tailored solutions that empower
            your business and drive meaningful growth forward.
          </p>
          <div className="mt-8 flex md:flex-row flex-col gap-7">
            <div className="flex gap-3">
              <img
                src={faidedmessage}
                alt="faidedmessage"
                className="w-[36px] h-[36px]"
              />
              <div>
                <h4 className="font-normal text-sm text-[#858892]">
                  Send us a message
                </h4>
                <h3 className="text-sm font-medium">
                  abuzar@bluebillionaireai.com
                </h3>
              </div>
            </div>
            <div className="flex  gap-3">
              <img
                src={faidedphone}
                alt="faidedmessage"
                className="w-[36px] h-[36px]"
              />
              <div>
                <h4 className="font-normal text-sm text-[#858892]">
                  Give us a call
                </h4>
                <h3 className="text-sm font-medium">+91 9666296965</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-1/2">
              <h3>Full name</h3>
              <div className="border border-[#505362] rounded-lg mt-2">
                <input
                  type="text"
                  placeholder="John Carter"
                  className="py-4 w-full  pl-4 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3>Email address</h3>
              <div className="border border-[#505362] rounded-lg mt-2">
                <input
                  type="email"
                  placeholder="example@youremail.com"
                  className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-1/2">
              <h3>Phone number</h3>
              <div className="border border-[#505362] rounded-lg mt-2">
                <input
                  type="number"
                  placeholder="(123) 456 - 7890"
                  className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3>Company</h3>
              <div className="border border-[#505362] rounded-lg mt-2">
                <input
                  type="text"
                  placeholder="ex. Google"
                  className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-full">
              <h3>Message</h3>
              <div className="border border-[#505362] min-h-40 rounded-lg mt-2">
                <textarea
                  className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0 resize-none"
                  rows="4"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-0">
            <div>
              <Link to="/contactus">
                <Button buttonName="Send Message" border={true} />
              </Link>
            </div>
            <div className="flex gap-2 pr-0 lg:pr-8">
              <img src={roundedfacebook} alt="roundedfacebook" />
              <img src={roundedtwitter} alt="roundedtwitter" />
              <img src={roundedinstagram} alt="roundedinstagram" />
              <img src={roundedlinkedin} alt="roundedlinkedin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
