import leaves from "../img/leaves.png";
import contact from "../img/chat.png";
import star from "../img/star.png";


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
        },
        {
            class: "attributions",
            header: "Icon Attributions",
            imgSrc: star,
            items: [
                {
                    href: "https://www.flaticon.com/free-icons/sweets",
                    title: "sweets icons",
                    innerHTML: "Sweets icons created by Paul J. - Flaticon"
                },
                {
                    href: "https://www.flaticon.com/free-icons/sushi",
                    title: "sushi icons",
                    innerHTML: "Sushi icons created by Flat Icons - Flaticon"
                },
                {
                    href: "https://www.flaticon.com/free-icons/christmas",
                    title: "christmas icons",
                    innerHTML: "Christmas icons created by Abbasi - Flaticon"
                }, 
                {
                    href: "https://www.flaticon.com/free-icons/juice",
                    title: "juice icons",
                    innerHTML: "Juice icons created by Smashicons - Flaticon"
                },
                {
                    href: "https://www.flaticon.com/free-icons/coffee-cup", 
                    title: "coffee cup icons",
                    innerHTML: "Coffee cup icons created by Freepik - Flaticon"
                },
                {
                    href: "https://www.flaticon.com/free-icons/mooncake",
                    title: "mooncake icons",
                    innerHTML: "Mooncake icons created by Freepik - Flaticon"
                },
                {
                    href: "https://www.flaticon.com/free-icons/mapo-tofu",
                    title: "mapo tofu icons",
                    innerHTML: "Mapo tofu icons created by Freepik - Flaticon"
                },
                {
                    href: "https://www.flaticon.com/free-icons/cookies",
                    title: "cookie icons",
                    innerHTML: "Cookies icons created by ultimatearm - Flaticon"
                },
                {
                    href: "https://www.flaticon.com/free-icons/leaves",
                    title: "leaves icons",
                    innerHTML: "Leaves icons created by Prosymbols Premium - Flaticon"
                },
                {
                    href: "https://www.flaticon.com/free-icons/cookies",
                    title: "cookies icons",
                    innerHTML: "Dumpling icons created by BZZRINCANTATION - Flaticon"
                },
                {
                    href: "https://www.flaticon.com/free-icons/contact",
                    title: "contact icons",
                    innerHTML: "Contact icons created by Prashanth Rapolu 15 - Flaticon"
                },
                {
                    href: "https://dribbble.com/dariusdan?ref=svgrepo.com",
                    tile: "home tea icon",
                    innerHTML: "Vectors and icons by Darius Dan in CC Attribution License via SVG Repo "
                }
                
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

        if (index === 0 || index === 1) {
            section.items.forEach(item => {
                const element = document.createElement("p");
                element.textContent = item.content;
                sectionDiv.appendChild(element);
            })
        }

        if (index === 2) {
            const list = document.createElement("ul");

            section.items.forEach(item => {
                
                const listItem = document.createElement("li");
                const attribution = document.createElement("a");

                attribution.href = item.href;
                attribution.title = item.title;
                attribution.textContent = item.innerHTML;

                listItem.appendChild(attribution);
                list.appendChild(listItem);
                
            })
            sectionDiv.appendChild(list);
        }
        aboutContainer.appendChild(sectionDiv);
    });
    container.appendChild(aboutContainer);
}