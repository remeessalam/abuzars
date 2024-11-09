import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AppLayout from "./Layout/AppLayout";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactusPage from "./pages/ContactusPage/ContactusPage";
import LandingPage from "./landingpage/src/pages/LandingPage/LandingPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/contactus",
        element: <ContactusPage />,
      },
      {
        path: "/webpage",
        element: <LandingPage page={"web"} />,
      },
      {
        path: "/mobilepage",
        element: <LandingPage page={"mob"} />,
      },
    ],
  },
]);

export default appRouter;
