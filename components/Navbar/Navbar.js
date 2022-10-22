import { useMediaQuery } from "../../hooks/useMediaQuery";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const Navbar = () => {
  const isMobile = useMediaQuery("600");

  return isMobile ? <MobileView /> : <DesktopView />;
};

export default Navbar;
