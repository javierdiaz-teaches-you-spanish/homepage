import { linkedinAccount } from "../assets/text-content";
import { linkedin } from "../assets/icons-source";
import { insertImg } from "./insertImg";


function linkedinDiv(parentDiv) {

    const linkedinLink = document.createElement("a");
    linkedinLink.setAttribute("href", linkedinAccount);
    linkedinLink.setAttribute("target", "_blank");

    const linkedinImg = new Image();
    linkedinImg.src = linkedin;
    insertImg(
        linkedinLink,
        linkedinImg.src,
        "Linkedin",
        "iconImg",
        "30px",
        "30px"
    );


    parentDiv.appendChild(linkedinLink);

};

export { linkedinDiv };