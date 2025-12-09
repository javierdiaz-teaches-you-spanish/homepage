import { preplyLink } from "../assets/text-content";
import { preply } from "../assets/icons-source";
import { insertImg } from "./insertImg";


function preplyDiv(parentDiv) {

    const link = document.createElement("a");
    link.setAttribute("href", preplyLink);
    link.setAttribute("target", "_blank");

    const linkImg = new Image();
    linkImg.src = preply;
    insertImg(
        link,
        linkImg.src,
        "Preply",
        "iconImg",
        "30px",
        "30px"
    );

    parentDiv.appendChild(link);

};

export { preplyDiv };