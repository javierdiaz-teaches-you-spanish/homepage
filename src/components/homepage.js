
import changeTheme from "../assets/img/theme-light-dark.png";
import { arrayProjects } from "../assets/text-content";
import { insertImg } from "./insertImg";
import { footerDiv } from "./footerDiv";
import { headerDiv } from "./headerDiv";
import { reviewsDiv } from "./reviews";

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

  let selectedLang = "lang1";
  let filteredText = getFilteredText(selectedLang);

  // HEADER
  headerDiv(pageContainer, filteredText);

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
   /*  div1.classList.add("divImgArticle"); */
    const screenshot = new Image();
    const div2 = document.createElement("div");
   /*  div2.classList.add("divNameArticle"); */
    const name = document.createElement("h3");
    /* name.setAttribute("style", "grid-column:1/2"); */
    const links = document.createElement("div");
   /*  links.setAttribute("style", "grid-column:2/3"); */

    const div3 = document.createElement("div");
   /*  div3.classList.add("divDescriptionArticle"); */
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
      let newText = getFilteredText(selectedLang);
      updateHeaderText(newText);
      updateFooterText(newText);
    }
  };

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

  function getFilteredText(selectedLang) {
    const [filtered] = arrayProjects.filter((e) => e.id === selectedLang);
    return filtered;
  }

  function updateHeaderText(selected) {
    const t1 = document.getElementById("t1");
    if (t1) {
      t1.textContent = selected.titleAbout;
    }
    const t2 = document.getElementById("t2");
    if (t2) {
      t2.textContent = selected.textContentAboutMe;
    }
  };

  function updateFooterText(selected) {
    const f1 = document.getElementById("f1");
    if (f1) {
      f1.textContent = selected.headContactMe;
    }
    const f2 = document.getElementById("f2");
    if (f2) {
      f2.textContent = selected.textContactMe;
    }
  };


  


  // FOOTER
  footerDiv(bgDivSecond, filteredText);


  document.body.appendChild(flashMessages);
  document.body.appendChild(themeButton);
  document.body.appendChild(bgDivFirst);
  document.body.appendChild(bgDivSecond);

  bgDivFirst.appendChild(pageContainer);
  pageContainer.appendChild(main);

  main.appendChild(selectLanguage);
  main.appendChild(content);
  
  reviewsDiv(content); 
 

}

export { homepage };
