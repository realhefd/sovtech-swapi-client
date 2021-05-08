import starwarsLogo from '../assets/starwars.jpg';
import sovtechLogo from '../assets/logo.png';
import { Link } from "react-router-dom";
import ThemeSwitch from './Switch';
import { NavbarHeader, NavbarImage } from './StyledComponents'

const Navbar: React.FC<{}> = () => {
  return(
    <NavbarHeader>
      <Link to="/">
        <NavbarImage src={sovtechLogo} alt="logo" />
      </Link>
      <NavbarImage src={starwarsLogo} alt="StarWars" />
      <ThemeSwitch />
    </NavbarHeader>
  );
};

export default Navbar;
