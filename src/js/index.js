import "../css/styles.css";
import Contact from "./contact";
import Menu from "./menu";
import brothersLogo from "../asssets/logo.png";
import { createNode, render } from "./documentHelper";

function Home(content) {
    // First part of the component
    const contentImage = createNode("div", { class: "content-image" }, [
        createNode("img", { id: "image", class: "content-logo" }, [
            brothersLogo,
        ]),
    ]);

    // Second part of the component
    const contentInformation = createNode(
        "div",
        { class: "content-information" },
        [
            createNode("span", { class: "description" }, [
                `Slicing pizza since 2011, Brothers' Pizza Hauz has been serving local favorites that taste like home — affordable, 
                freshly baked, and proudly Filipino-style, made fresh every single day.`,
            ]),

            createNode("div", { class: "services" }, [
                createNode("span", { class: "services-title" }, ["Services"]),

                createNode("ul", { class: "service-list" }, [
                    "Delivery",
                    "Takeaway",
                    "Dine-in",
                    "Online booking",
                    "Reservations",
                    "Roadside collection",
                    "In-store collection",
                ]),
            ]),
        ]
    );

    content.appendChild(contentImage);
    content.appendChild(contentInformation);

    render(document.querySelector("#page-content"), content);
}

const content = createNode("div", { class: "content", id: "content" }, []);
// const home = Home(content);
const menu = Menu(content);
// const contact = Contact(content);
