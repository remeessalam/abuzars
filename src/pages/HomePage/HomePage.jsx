import Section from "./Sections/Section";
import SectionFive from "./Sections/SectionFive";
import SectionFour from "./Sections/SectionFour";
// import SectionThree from "./Sections/SectionThree";
import SectionTwo from "./Sections/SectionTwo";
const HomePage = () => {
  return (
    <>
      <Section />;
      <SectionTwo />
      {/* <SectionThree /> */}
      <SectionFour />
      <SectionFive />
    </>
  );
};

export default HomePage;
