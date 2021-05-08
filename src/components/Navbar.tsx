import starwarsLogo from '../assets/starwars.jpg';
import sovtechLogo from '../assets/logo.png';
import { Link } from "react-router-dom";
import ThemeSwitch from './Switch';
import '../styles/navigation.module.css';

const Navbar: React.FC<{}> = () => {
  return(
    <header className="header">
      <Link to="/">
        <img src={sovtechLogo} className="logo" alt="logo" />
      </Link>
      <img src={starwarsLogo} className="logo" alt="StarWars" />
      <ThemeSwitch />
    </header>
  );
};

export default Navbar;