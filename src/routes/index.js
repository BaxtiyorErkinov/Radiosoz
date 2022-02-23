import Home from "../components/Home/";
import AboutUs from "../components/AboutUs/AboutUs";
import Prices from "../components/Prices/";
import ErrorPage from "../components/ErrorPage";
import Portfolio from "../components/Portfolio";
import PortfolioDetail from "../components/PortfolioDetail";

export const routes = [
  { path: "/", element: Home, exact: true },
  { path: "/aboutus", element: AboutUs, exact: true },
  { path: "/prices", element: Prices, exact: false },
  { path: "/portfolio", element: Portfolio, exact: true },
  { path: "/portfolio/:id", element: PortfolioDetail, exact: true },
  { path: "*", element: ErrorPage, exact: true },
];
