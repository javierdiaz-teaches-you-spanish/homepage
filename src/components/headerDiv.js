import imageSmall from "../assets/img/small-img.jpg";
import imageMedium from "../assets/img/medium-img.jpg";
import imageLarge from "../assets/img/large-img.jpg";
import { linkedinDiv } from "./linkedinDiv";
import { preplyDiv } from "./preplyDiv";

function headerDiv(parentDiv, selected) {
    
    const header = document.createElement("header");
    const textInPhoto = document.createElement("H2");
    textInPhoto.textContent = "Online Tutor";
    textInPhoto.classList.add("textInPhoto");

    const photoPicture = document.createElement("picture");
    const sourceLarge = document.createElement("source");
    const sourceMedium = document.createElement("source");
    const photoImg = document.createElement("img");
    const myLargeImg = new Image();
    myLargeImg.src = imageLarge;
    sourceLarge.setAttribute("srcset", myLargeImg.src);
    sourceLarge.setAttribute("media", "(min-width: 981px)");
    const myMediumImg = new Image();
    myMediumImg.src = imageMedium;
    sourceMedium.setAttribute("srcset", myMediumImg.src);
    sourceMedium.setAttribute("media", "(min-width:621px) and (max-width:980px)");
    const mySmallImg = new Image();
    mySmallImg.src = imageSmall;
    photoImg.setAttribute("src", mySmallImg.src);
    photoImg.setAttribute("alt", "");
    photoImg.classList.add("photoImg");

    const aboutMe = document.createElement("section");
    aboutMe.classList.add("content");

    // text
    const aboutMeHeading1 = document.createElement("H2");
    aboutMeHeading1.setAttribute("id","t1");
    const aboutMeText1 = document.createElement("p");
    aboutMeText1.classList.add("text");
    aboutMeText1.setAttribute("id","t2");
    aboutMeHeading1.textContent = selected.titleAbout;
    aboutMeText1.textContent = selected.textContentAboutMe;

    // icons
    const aboutMeIcons = document.createElement("div");
    aboutMeIcons.classList.add("divIcons");
    linkedinDiv(aboutMeIcons);
    preplyDiv(aboutMeIcons);


    parentDiv.appendChild(header);
    header.appendChild(photoPicture);
    header.appendChild(aboutMe);
    photoPicture.appendChild(sourceLarge);
    photoPicture.appendChild(sourceMedium);
    photoPicture.appendChild(photoImg);
    photoPicture.appendChild(textInPhoto);
    aboutMe.appendChild(aboutMeHeading1);
    aboutMe.appendChild(aboutMeText1);
    aboutMe.appendChild(aboutMeIcons);

};

export { headerDiv };