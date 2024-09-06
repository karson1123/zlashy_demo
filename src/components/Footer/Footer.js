import footer from './footer.module.scss';
import BalanceLogo from '../../assets/images/BalanceLogo.png';
import Linkedin from '../../assets/images/Linkedin.png';

import Mail from '../../assets/images/Mail.svg';
import MapPin from '../../assets/images/Map_Pin.svg';

const Footer = () => {
  return (
    <div className={footer.container}>
      <div className={footer.row}>

        <div className={footer.logoContainer}>
          <img src={BalanceLogo} alt="Balance Logo" className={footer.logo} />
          <p className={footer.logoText}>Powered by En-Novelty</p>
        </div>

        <div className={footer.contactContainer}>
          <div className={footer.contact}><img src={Mail} alt="Mail"/>hello@en-novelty.com</div>
          <div className={footer.contact}><img src={MapPin} alt="MapPin"/>713, K11 Atelier, 728 King's Road, Quarry Bay</div>
        </div>

        <div className={footer.In}>
          <img src={Linkedin} alt="Linkedin" />
        </div>
      </div>


      <div className={footer.row}>
        <div className={footer.footerLinks}>
          <div>Terms and Conditions</div>
          <div>Privacy Policy</div>
          <div>Personal Information Collection Statement</div>
        </div>

        <div className={footer.trademark}>
          @2024 En-Novelty Limited</div>
      </div>


    </div>
  );
};

export default Footer;
