import photoFooter from "../assets/img/footer-img.png";
import { insertImg } from "./insertImg";
import { linkedinDiv } from "./linkedinDiv";
import { preplyDiv } from "./preplyDiv";

function footerDiv(parentDiv, selected) {

    const footer = document.createElement("footer");
    const contactMe = document.createElement("section");

    // text
    const contactMeHeading = document.createElement("H2");
    contactMeHeading.setAttribute('id', 'f1');
    const contactMeText = document.createElement("p");
    contactMeText.setAttribute("id", 'f2');
    contactMeHeading.textContent = selected.headContactMe;
    contactMeText.textContent = selected.textContactMe;

    // icons
    const contactMeIcons = document.createElement("div");
    linkedinDiv(contactMeIcons);
    preplyDiv(contactMeIcons);


    parentDiv.appendChild(footer);
    footer.appendChild(contactMe);
    contactMe.appendChild(contactMeHeading);
    contactMe.appendChild(contactMeText);
    contactMe.appendChild(contactMeIcons);

    const photoJD = new Image();
    photoJD.src = photoFooter;
    insertImg(footer, photoJD.src, "javier diaz", "photoFooter", "auto", "250px");

};

export { footerDiv };