import sushi from "../img/sushi.png";
import dumplings from "../img/dumplings.png";
import tofu from "../img/mapo-tofu.png";
import tea from "../img/tea-cup.png";
import juice from "../img/drink.png";
import coffee from "../img/coffee-cup.png";
import moonCakes from "../img/mooncake.png";
import jennamite from "../img/candy.png";
import cookies from "../img/cookies.png";



export default function menu() {
    const container = document.querySelector("#content");
    container.textContent = "";
    
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuData = [
        {
            title: "LIGHT BITES",
            class: "light-bites",
            items: [
                {id: "sushi", name: "Sushi", imgSrc: sushi},
                {id: "dumplings", name: "Dumplings", imgSrc: dumplings},
                {id: "tofu", name: "Tofu", imgSrc: tofu}
            ]
        },
        {
            title: "DRINKS",
            class: "drinks",
            items: [
                {id: "tea", name: "Tea", imgSrc: tea},
                {id: "juice", name: "Juice", imgSrc: juice},
                {id: "coffee", name: "Coffee", imgSrc: coffee}
            ]
        },
        {
            title: "SWEET TREATS",
            class: "sweet-treats",
            items: [
                {id: "moon-cakes", name: "Moon Cakes", imgSrc: moonCakes},
                {id: "jennamite", name: "Jennamite", imgSrc: jennamite},
                {id: "cookies", name: "Kale Cookies", imgSrc: cookies}
            ]
        }
    ];

    menuData.forEach((section, index) => {
        console.log(section);
        const sectionContainer = document.createElement("div");
        sectionContainer.classList.add(`section-${index + 1}-container`);

        const sectionTitle = document.createElement("h2");
        sectionTitle.textContent = section.title;
        sectionContainer.appendChild(sectionTitle);


        const cardContainer = document.createElement("div");
        cardContainer.classList.add(section.class);

        section.items.forEach(card => {
            const sectionItem = document.createElement("div");
            sectionItem.classList.add("card");
            sectionItem.id = card.id;

            const cardName = document.createElement("h3");
            cardName.textContent = card.name;
            sectionItem.appendChild(cardName);

            const iconDiv = document.createElement("div");
            iconDiv.classList.add("icon");

            const icon = document.createElement("img");
            icon.src = card.imgSrc;
            iconDiv.appendChild(icon);
            sectionItem.appendChild(iconDiv);

            cardContainer.appendChild(sectionItem);
        });
        sectionContainer.appendChild(cardContainer);
        menuContainer.appendChild(sectionContainer);
    });
    container.appendChild(menuContainer);
}

