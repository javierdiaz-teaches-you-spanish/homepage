import imageSmall from '../assets/img/small-img.jpg';
import imageMedium from '../assets/img/medium-img.jpg';
import imageLarge from '../assets/img/large-img.jpg';
import photoFooter from '../assets/img/footer-img.png';
import changeTheme from '../assets/img/theme-light-dark.png';
import externalLink from '../assets/img/open-in-new.png';
import emailIcon from '../assets/img/email-outline.png';
import phoneIcon from '../assets/img/phone-dial-outline.png';
import { titleAbout,textContentAboutMe } from '../assets/text-content';
import { linkedinAccount } from '../assets/text-content';
import {
  textContentContactMe,
  mailText,
} from '../assets/text-content';
import { arrayProjects } from '../assets/text-content';
import { linkedin } from '../assets/icons-source';
import { insertImg } from './insertImg';



function homepage() {
    const root = document.documentElement;
    root.textContent = "prueba inicial ver otro cambio";
};


export { homepage };