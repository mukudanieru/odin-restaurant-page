import { createNode, render } from "./documentHelper";

export default function Menu(main) {
    const content = createNode("div", { class: "content", id: "content" }, []);

    content.classList.add("prices-content");

    const menuTitle = createNode("div", { class: "menu-title" }, ["Menu"]);

    const prices = createNode("div", { class: "prices" }, [
        createNode("div", { class: "price" }, [
            createNode("div", { class: "price-name" }, ["Personal"]),
            createNode("div", { class: "price-value" }, ["₱99"]),
        ]),
        createNode("div", { class: "price" }, [
            createNode("div", { class: "price-name" }, ["Double"]),
            createNode("div", { class: "price-value" }, ["₱139"]),
        ]),
        createNode("div", { class: "price" }, [
            createNode("div", { class: "price-name" }, ["Family"]),
            createNode("div", { class: "price-value" }, ["₱210"]),
        ]),
        createNode("div", { class: "price" }, [
            createNode("div", { class: "price-name" }, ["Clan"]),
            createNode("div", { class: "price-value" }, ["₱280"]),
        ]),
    ]);

    const flavors = createNode("div", { class: "flavors" }, [
        createNode("div", { class: "flavors-title" }, ["Flavors"]),

        createNode("div", { class: "flavor-list" }, [
            createNode("div", { class: "flavor" }, ["Hawaiian"]),
            createNode("div", { class: "flavor" }, ["Ham n' Cheese"]),
            createNode("div", { class: "flavor" }, ["Beef n' Mushroom"]),
            createNode("div", { class: "flavor" }, ["Bacon n' Cheese"]),
            createNode("div", { class: "flavor" }, ["Pepperoni"]),
        ]),
    ]);

    content.appendChild(menuTitle);
    content.appendChild(prices);
    content.appendChild(flavors);

    render(main, content);
}
