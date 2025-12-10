import img1 from "../assets/img/review_1.jpg";
import img2 from "../assets/img/review_2.jpg";
import img3 from "../assets/img/review_3.jpg";
import img4 from "../assets/img/review_4.jpg";
import img5 from "../assets/img/review_5.jpg";
import img6 from "../assets/img/review_6.jpg";
import { insertImg } from "./insertImg";

function reviewsDiv(parentDiv) {

    const arrayImg = [img1, img2, img3, img4, img5, img6];

    const div = document.createElement("div");
    div.setAttribute("id", "myCarousel");
    div.className = "carousel";

    const subdiv = document.createElement("div");
    div.className = "carousel-inner";


    arrayImg.map((e, index) => {
        const divItem = document.createElement("div");
        divItem.setAttribute("id", `item${index}`);
        divItem.className = "item animateOut";
        const revImg = new Image();
        revImg.src = e;
        insertImg(divItem, revImg.src, "review", "photoImgReviews", '100%', 'auto');
        subdiv.appendChild(divItem);
    });

    parentDiv.appendChild(div);
    div.appendChild(subdiv);


    // functionality

    const n = arrayImg.length;
    const unit = 5000;
    unCiclo(n, unit);
    setInterval(() => { unCiclo(n, unit); }, unit * n);

    function unCiclo(n, unit) {
        for (let i = 0; i < n; i++) {
            setTimeout(() => { quitActiveItem(); }, unit * i);
            setTimeout(() => { setActiveItem(i); }, unit * i);
        }
    }


    function setActiveItem(arg) {
        const item = document.getElementById(`item${arg}`);
        if (item) {
            item.classList.remove("item");
            item.classList.remove("animateOut");
            
            item.classList.add("active");
            item.classList.add("animateIn");
        }
    }

    function quitActiveItem() {
        const slideActive = document.querySelector('.active');
        if (slideActive) {
            slideActive.classList.remove("active");
            slideActive.classList.remove("animateIn");

            slideActive.classList.add("item");
            slideActive.classList.add("animateOut");
        }

    }


};

export { reviewsDiv };



