import './styles/style-reset.css';
import './styles/style.css';
import './styles/style-large.css';
import './styles/style-medium.css';
import { googleFonts } from "./components/google-fonts";
import { homepage } from "./components/homepage";

const meta = document.createElement('meta');
meta.setAttribute('name','description');
meta.setAttribute('content','learning spanish online tutor javier diaz');

googleFonts();
homepage();

document.head.appendChild(meta);
 