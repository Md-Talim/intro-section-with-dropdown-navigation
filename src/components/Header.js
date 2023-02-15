import Nav from './Nav';
import logo from '../images/logo.svg';
import hamburgerMenu from '../images/icon-menu.svg';
import closeMenuIcon from '../images/icon-close-menu.svg';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(hamburgerMenu);

  const handleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    isMenuOpen ? setMenuIcon(hamburgerMenu) : setMenuIcon(closeMenuIcon);
  };

  return (
    <header className="relative flex justify-between items-center md:items-start my-6 mx-20 text-gray text-sm font-serif">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="mr-16 mt-2" />
      </div>

      <img
        className="md:hidden w-5 aspect-square"
        src={menuIcon}
        alt="menu"
        onClick={handleMenu}
      />
      <Nav isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default Header;
