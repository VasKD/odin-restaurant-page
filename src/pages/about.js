import leaves from "../img/leaves.png";
import contact from "../img/chat.png";


export default function about() {
    const container = document.querySelector("#content");
    container.textContent = "";

    // create container for about section
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    // array of objects for each section of about page
    const aboutContent = [
        {  
            class: "about",
            header: "About Cafe Ba Sing Se",
            imgSrc: leaves,
            items: [
                {
                    content: "We are located in the Lower Ring of Ba Sing Se, the capital of the Earth Kingdom. Our doors are open to anyone and everyone who would like a small respite from life. Each dish and cup of tea are made with care. Here, peace is guaranteed -- there is no war in Cafe Ba Sing Se, just tea!"
                }
            ]
        },
        {
            class: "contact",
            header: "Contact Us",
            imgSrc: contact,
            items: [
                {content: "Location: Lower Ring, Ba Sing Se"},
                {content: "Hours: From sunrise to moonrise"},
                {content: "Inquiries: tea@cafebasingse.com"},
                {content: "Phone: (888) 88E-ARTH"}
            ]
        }
    ];


    aboutContent.forEach((section, index) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add(section.class);

        const header = document.createElement("h2");
        header.textContent = section.header;
        sectionDiv.appendChild(header);

        const icon = document.createElement("img");
        icon.src = section.imgSrc;
        sectionDiv.appendChild(icon);

        
        section.items.forEach(item => {
            const element = document.createElement("p");
            element.textContent = item.content;
            sectionDiv.appendChild(element);
        
        });
        aboutContainer.appendChild(sectionDiv);
    });
    container.appendChild(aboutContainer);
}