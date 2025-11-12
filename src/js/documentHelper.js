function createNode(tag, attributes = {}, contents = []) {
    const element = document.createElement(tag);

    // Set attributes
    for (const [key, value] of Object.entries(attributes)) {
        if (key === "class") {
            element.className = value;
        } else if (key === "id") {
            element.id = value;
        } else {
            element.setAttribute(key, value);
        }
    }

    // Set content for image and lists
    if (tag === "img") {
        element.src = contents[0];

        return element;
    } else if (tag === "ul" || tag === "ol") {
        contents.forEach((content) => {
            const li = document.createElement("li");
            li.textContent = content;
            element.appendChild(li);
        });

        return element;
    }

    // Set content
    for (const content of contents) {
        if (typeof content === "string") {
            element.appendChild(document.createTextNode(content));
        } else if (content instanceof Node) {
            element.appendChild(content);
        }
    }

    return element;
}

function render(selector, components) {
    const target =
        typeof selector === "string"
            ? document.querySelector(selector)
            : selector;

    target.innerHTML = "";

    if (Array.isArray(components)) {
        components.forEach((component) => target.appendChild(component));
    } else {
        target.appendChild(components);
    }
}

export { createNode, render };
