import imageSmall from "../assets/img/small-img.jpg";
import imageMedium from "../assets/img/medium-img.jpg";
import imageLarge from "../assets/img/large-img.jpg";
import imgReviewsLarge from "../assets/img/img-rev-large.png";
import imgReviewsSmall from "../assets/img/img-rev-small.png";
import photoFooter from "../assets/img/footer-img.png";
import changeTheme from "../assets/img/theme-light-dark.png";
import emailIcon from "../assets/img/email-outline.png";
import {
  titleAbout1,
  titleAbout2,
  textContentAboutMe1,
  textContentAboutMe2,
} from "../assets/text-content";
import { linkedinAccount, linkedinAccountTxt } from "../assets/text-content";
import { textContentContactMe, textContentContactMe1 ,mailText } from "../assets/text-content";
import { arrayProjects } from "../assets/text-content";
import { linkedin } from "../assets/icons-source";
import { insertImg } from "./insertImg";

function homepage() {
  const root = document.documentElement;
  root.setAttribute("lang", "en");
  root.setAttribute("id", "root-element");
  root.className = "light";

  const flashMessages = document.createElement("div");
  flashMessages.setAttribute("id", "flash-messages");

  const themeButton = document.createElement("button");
  themeButton.classList.add("themeButton");
  const changeThemeImg = new Image();
  changeThemeImg.src = changeTheme;
  insertImg(
    themeButton,
    changeThemeImg.src,
    "theme-light-dark",
    "iconImg",
    "30px",
    "30px"
  );
  themeButton.setAttribute("style", "border-radius: 30px;");
  themeButton.addEventListener("click", () => {
    setTheme();
  });

  function setTheme() {
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
  }

  // background colors
  const bgDivFirst = document.createElement("div");
  bgDivFirst.classList.add("bgDivFirst");
  const bgDivSecond = document.createElement("div");
  bgDivSecond.classList.add("bgDivSecond");

  const pageContainer = document.createElement("div");
  pageContainer.classList.add("page-container");

  // HEADER
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
  const aboutMeHeading1 = document.createElement("H2");
  const aboutMeHeading2 = document.createElement("H2");
  const aboutMeText1 = document.createElement("p");
  const aboutMeText2 = document.createElement("p");
  const aboutMeIcons = document.createElement("div");
  const linkedinLink = document.createElement("a");

  aboutMe.classList.add("content");
  aboutMeHeading1.textContent = titleAbout1;
  aboutMeHeading2.textContent = titleAbout2;
  aboutMeText1.textContent = textContentAboutMe1;
  aboutMeText1.classList.add("text");
  aboutMeText2.textContent = textContentAboutMe2;
  aboutMeText2.classList.add("text");
  aboutMeIcons.classList.add("divIcons");

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

  // PROJECTS CONTENT
  const main = document.createElement("main");
  const content = document.createElement("section");
  content.classList.add("contentProject");

  for (let i = 0; i < arrayProjects.length; i++) {
    const project = document.createElement("article");
    project.setAttribute("id", `lang${i + 1}`);
    content.appendChild(project);
  }

  const allProjectsDiv = content.querySelectorAll("article");
  const projectsInDiv = [...allProjectsDiv];
  const iterator = projectsInDiv.entries();

  projectsInDiv.forEach(() => {
    let index = iterator.next().value;
    let x = index[1];
    const div1 = document.createElement("div");
    div1.classList.add("divImgArticle");
    const screenshot = new Image();
    const div2 = document.createElement("div");
    div2.classList.add("divNameArticle");
    const name = document.createElement("h3");
    name.setAttribute("style", "grid-column:1/2");
    const links = document.createElement("div");
    links.setAttribute("style", "grid-column:2/3");
   
    const div3 = document.createElement("div");
    div3.classList.add("divDescriptionArticle");
    const description1 = document.createElement("p");
    const description2 = document.createElement("p");
    const description3 = document.createElement("p");

    arrayProjects.map((e) => {
      switch (e.id === x.getAttribute("id")) {
        case true:
          screenshot.src = e.screenshotProjectSource;
          insertImg(div1, screenshot.src, "", "projectImg", "30px", "10px");
          name.textContent = e.projectName;
          description1.textContent = e.projectDescription1;
          description2.textContent = e.projectDescription2;
          description3.textContent = e.projectDescription3;
          if (x.getAttribute("id") === "lang1") {
            x.classList.add("show");
          } else {
            x.classList.add("hide");
          }
          break;
        case false:
          break;
      }
    });

    x.appendChild(div1);
    x.appendChild(div2);
    x.appendChild(div3);
    div2.appendChild(name);
    div2.appendChild(links);

    div3.appendChild(description1);
    div3.appendChild(description2);
    div3.appendChild(description3);
  });

  const selectLanguage = document.createElement("fieldset");

  arrayProjects.map((e) => {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    label.textContent = e.language;
    label.setAttribute("for", e.language);
    input.setAttribute("type", "radio");
    input.setAttribute("name", "language");
    input.setAttribute("value", e.id);
    input.setAttribute("id", e.language);

    input.addEventListener("change", () => {
      displayRadioValue();
    });

    if (input.getAttribute("id") === "português") {
      input.setAttribute("checked", "true");
    }

    selectLanguage.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
  });

  let selectedLang = "lang1";
  let allOptions = [];
  arrayProjects.map((e) => {
    allOptions.push(e.id);
  });

  function displayRadioValue() {
    let getSelectedValue = document.querySelector(
      'input[name="language"]:checked'
    );
    if (getSelectedValue != null) {
      selectedLang = getSelectedValue.value;
      displaySelectedText(selectedLang, allOptions);
    }
  }

  function displaySelectedText(selectedLang, allOptions) {
    const rest = allOptions.filter((string) => string !== selectedLang);
    const show = document.getElementById(`${selectedLang}`);
    show.classList.add("show");
    show.classList.remove("hide");
    rest.forEach((e) => {
      const hide = document.getElementById(e);
      hide.className = "hide";
    });
  }

  const photoReviews = document.createElement("picture");
  const sourceLargeAndMedium = document.createElement("source");
  const photoReviewsImg = document.createElement("img");
  const myLargeRevImg = new Image();
  myLargeRevImg.src = imgReviewsLarge;
  sourceLargeAndMedium.setAttribute("srcset", myLargeRevImg.src);
  sourceLargeAndMedium.setAttribute("media", "(min-width: 621px)");
  const mySmallRevImg = new Image();
  mySmallRevImg.src = imgReviewsSmall;
  photoReviewsImg.setAttribute("src", mySmallRevImg.src);
  photoReviewsImg.setAttribute("alt", "reviews");
  photoReviewsImg.classList.add("photoImgReviews");
  

  // FOOTER
  const footer = document.createElement("footer");
  const contactMe = document.createElement("section");
  const contactMeHeading = document.createElement("H2");
  const contactMeText = document.createElement("p");
  const contactMeText1 = document.createElement("p");
  const mailAddress = document.createElement("p");
  contactMeHeading.textContent = "Contact me";
  contactMeText.textContent = textContentContactMe;
  contactMeText1.textContent = textContentContactMe1;

  mailAddress.textContent = mailText;
 
  const emailImg = new Image();
  emailImg.src = emailIcon;
  insertImg(
    contactMe,
    emailImg.src,
    "email-address",
    "iconImg",
    "30px",
    "30px"
  );
  const contactMeIcons = document.createElement("div");

  const contactMelinkedinLink = document.createElement("a");

  contactMelinkedinLink.setAttribute("href", linkedinAccount);
  contactMelinkedinLink.setAttribute("target", "_blank");
  insertImg(
    contactMelinkedinLink,
    linkedinImg.src,
    "Linkedin",
    "iconImg",
    "30px",
    "30px"
  );
  const linkedinTxt = document.createElement('p');
  linkedinTxt.textContent = linkedinAccountTxt;

  const imgFooter = document.createElement("img");
  const photoJD = new Image();
  photoJD.src = photoFooter;
  imgFooter.classList.add("photoFooter");
  imgFooter.setAttribute("src", photoJD.src);
  imgFooter.setAttribute("width", "auto");
  imgFooter.setAttribute("height", "250px");
  imgFooter.setAttribute("alt", "javier diaz");

  document.body.appendChild(flashMessages);
  document.body.appendChild(themeButton);
  document.body.appendChild(bgDivFirst);
  document.body.appendChild(bgDivSecond);

  bgDivFirst.appendChild(pageContainer);
  bgDivSecond.appendChild(footer);
  pageContainer.appendChild(header);
  pageContainer.appendChild(main);
  header.appendChild(photoPicture);
  header.appendChild(aboutMe);
  photoPicture.appendChild(sourceLarge);
  photoPicture.appendChild(sourceMedium);
  photoPicture.appendChild(photoImg);
  photoPicture.appendChild(textInPhoto);
  aboutMe.appendChild(aboutMeHeading1);
  aboutMe.appendChild(aboutMeText1);
  aboutMe.appendChild(aboutMeHeading2);
  aboutMe.appendChild(aboutMeText2);
  aboutMe.appendChild(aboutMeIcons);
  aboutMeIcons.appendChild(linkedinLink);

  main.appendChild(selectLanguage);
  main.appendChild(content);
  content.appendChild(photoReviews);
  photoReviews.appendChild(sourceLargeAndMedium);
  photoReviews.appendChild(photoReviewsImg);

  footer.appendChild(contactMe);
  footer.appendChild(imgFooter);
  contactMe.appendChild(contactMeHeading);
  contactMe.appendChild(contactMeText);
  contactMe.appendChild(contactMeText1);
  contactMe.appendChild(mailAddress);
  contactMe.appendChild(contactMeIcons);
  contactMeIcons.appendChild(contactMelinkedinLink);
  contactMeIcons.appendChild(linkedinTxt);
}

export { homepage };
