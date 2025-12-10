import { arrayProjects } from "../assets/text-content";

function description(parentDiv) {

    const div = document.createElement("div");

    for (let i = 0; i < arrayProjects.length; i++) {
        const project = document.createElement("article");
        project.setAttribute("id", `lang${i + 1}`);
        div.appendChild(project);
    }

    const allProjectsDiv = div.querySelectorAll("article");
    const projectsInDiv = [...allProjectsDiv];
    const iterator = projectsInDiv.entries();

    projectsInDiv.forEach(() => {
        let index = iterator.next().value;
        let x = index[1];
        const divA = document.createElement('div');
        divA.className = "parrafos";
        const divB = document.createElement('div');
        divB.className = "parrafos";
        const divC = document.createElement('div');
        divC.className = "parrafos";
        const divD = document.createElement('div');
        divD.className = "parrafos";
        const name = document.createElement("h3");
        const description1 = document.createElement("p");
        const description2 = document.createElement("p");
        const description3 = document.createElement("p");

        arrayProjects.map((e) => {
            switch (e.id === x.getAttribute("id")) {
                case true:
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

        x.appendChild(divA);
        x.appendChild(divB);
        x.appendChild(divC);
        x.appendChild(divD);
        divA.appendChild(name);
        divB.appendChild(description1);
        divC.appendChild(description2);
        divD.appendChild(description3);
    });

    parentDiv.appendChild(div);

}

export { description };
