import Telegram from "../assets/img/telegram.svg";
import Instagram from "../assets/img/instagram.svg";
import Facebook from "../assets/img/Facebook.svg";
import "../style/Footer.module.css";
import classes from '../style/Footer.module.css';


function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.wrapper}>
        <p className={classes.author}>© 2023 Volswagen. All rights reserved.</p>
        <div className={classes.icons}>
          <a target='_blank' href="https://instagram.com/volkswagen/">
            <img className={classes.img} src={Instagram} alt="" />
          </a>
          <a target='_blank' href="https://www.facebook.com/VW/">
            <img className={classes.img} src={Facebook} alt="" />
          </a>
          <a target='_blank' href="https://tttttt.me/volkswagen_fan">
            <img className={classes.img} src={Telegram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
