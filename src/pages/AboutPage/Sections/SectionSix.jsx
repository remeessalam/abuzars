import aboutpagesectionsixbg from "../../../assets/images/aboutpagesectionsixbg.png";
import Button from "../../../component/Button/Button";
const SectionSix = () => {
  return (
    <div
      className="flex mt-12 flex-col justify-center items-center md:w-[95%] lg:w-[80%] text-white w-full mx-auto h-[345px] bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutpagesectionsixbg})` }}
    >
      <div>
        <h2 className="text-[50px] font-medium">Join our team</h2>
      </div>
      <div>
        <p className="text-[#BABCC6] max-w-[500px] text-center">
          Lorem ipsum dolor sit amet consectetur iaculis viverra amet pulvinar
          vitae ultrices arcu. Gravida odio diam gravida congue.
        </p>
      </div>
      <div className="flex justify-between pl-4 pr-1 py-1 items-center w-[95%] mt-5 sm:w-[60%] border rounded-lg">
        <input
          type="text"
          className="bg-transparent w-[60%] border-none focus:outline-none focus:ring-0 truncate"
          placeholder="Enter your email address"
        />
        <Button buttonName="Join us" border={true} />
      </div>
    </div>
  );
};

export default SectionSix;
