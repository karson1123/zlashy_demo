import navbar from './navbar.module.scss';
import BalanceLogo from '../../assets/images/BalanceLogo.png';
import MenuAlt from '../../assets/images/Menu_Alt_01.svg';

import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className={navbar.container}>
      <div className={navbar.logoContainer}>
        <img src={BalanceLogo} alt="Balance Logo" className={navbar.logo} />
        <p className={navbar.logoText}>Powered by En-Novelty</p>
      </div>
      <div className={navbar.buttonRow}>
        <button className={navbar.button}>Features</button>
        <button className={navbar.button}>What's next</button>
        <button className={navbar.button}>Download guide</button>
        <button className={navbar.button}>EN <FaChevronDown className={navbar.arrow} /></button>
      </div>
      <div className={navbar.dropdownMenu}>
        <button className={navbar.button}><img src={MenuAlt} alt="Menu" /></button>
        
        {/* <div className={navbar.dropdownContent}>
          <a href="#">Features</a>
          <a href="#">What's next</a>
          <a href="#">Download guide</a>
          <a href="#">EN</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
