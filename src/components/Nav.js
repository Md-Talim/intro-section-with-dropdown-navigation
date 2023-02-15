import { useState } from 'react';
import Button from './Button';
import FeaturesMenu from './FeaturesMenu';
import arrowDown from '../images/icon-arrow-down.svg';
import arrowUp from '../images/icon-arrow-up.svg';
import CompanyMenu from './CompanyMenu';

function Nav({ isMenuOpen }) {
  const [isOpen, setIsOpen] = useState({ features: false, company: false });

  const toggleMenu = (e) => {
    const { name } = e.target;
    if (name === 'features') {
      setIsOpen((prevState) => {
        // if the companyMeny is expanded, then collapsing it
        if (prevState.company) {
          return {
            ...prevState,
            company: false,
            features: !prevState.features,
          };
        }
        return {
          ...prevState,
          features: !prevState.features,
        };
      });
    } else if (name === 'company') {
      setIsOpen((prevState) => {
        // if the featuresMenu is expanded, then collapsing it
        if (prevState.features) {
          return {
            ...prevState,
            features: false,
            company: !prevState.company,
          };
        }
        return {
          ...prevState,
          company: !prevState.company,
        };
      });
    }
  };

  return (
    <nav
      className={`${
        !isMenuOpen ? 'hidden' : 'absolute'
      } z-10 top-full left-1/2 md:left-0 h-screen md:h-auto bg-white w-3/5 flex flex-col gap-4 items-center md:relative md:w-full md:flex md:justify-between md:flex-row`}
    >
      <ul className="w-4/5 md:w-full mt-5 md:mt-0 flex flex-col md:flex-row gap-4 md:gap-8">
        <li className="md:relative">
          <div className="flex items-center gap-2">
            <button
              name="features"
              onClick={toggleMenu}
              className="hover:text-black"
            >
              Features
            </button>{' '}
            <img
              src={isOpen.features ? arrowUp : arrowDown}
              alt={'arrowIcon'}
            />
          </div>
          <FeaturesMenu isOpen={isOpen} />
        </li>
        <li className="md:relative">
          <div className="flex items-center gap-2">
            <button
              name="company"
              onClick={toggleMenu}
              className="hover:text-black"
            >
              Company
            </button>{' '}
            <img src={isOpen.company ? arrowUp : arrowDown} alt={'arrowIcon'} />
          </div>
          <CompanyMenu isOpen={isOpen} />
        </li>
        <li className="cursor-pointer hover:text-black">Careers</li>
        <li className="cursor-pointer hover:text-black">About</li>
      </ul>
      <ul className="w-4/5 md:max-w-fit flex flex-col md:flex-row gap-2">
        <li>
          <Button name="Login" />
        </li>
        <li>
          <Button name="Register" bordered={true} />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
