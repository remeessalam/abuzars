import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollTop";
import Logo from "../assets/svg/Logo.png";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-center  relative ">
        <Header />
        <div className="relative top-28 left-0 bg-contain bg-center bg-no-repeat">
          <div className="fixed flex justify-center items-center opacity-20 -z-10 top-0 bg-contain bg-center bg-no-repeat w-screen  h-screen">
            <div
              className="w-1/2 h-full bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${Logo})` }}
            />
          </div>
          <div className="overflow-hidden">
            <ScrollToTop />
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
