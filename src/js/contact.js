import { createNode, render } from "./documentHelper";

export default function Contact(content) {
    content.classList.add("contact");

    // Header part of the component
    const contactTitle = createNode("div", { class: "contact-title" }, [
        "Contact",
    ]);

    const facebookSVG = `                        
        <svg
            class="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-facebook-icon lucide-facebook"
        >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>`;

    const instagramSVG = `
        <svg
            class="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-instagram-icon lucide-instagram"
        >
        <rect
            width="20"
            height="20"
            x="2"
            y="2"
            rx="5"
            ry="5"
        />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    `;

    // The actual content part of the component
    const contactList = createNode("div", { class: "contact-list" }, [
        createNode(
            "a",
            {
                class: "facebook links",
                href: "https://www.facebook.com/BrothersPizzaHauz/",
                target: "_blank",
                rel: "noopener noreferrer",
            },
            [facebookSVG]
        ),
        createNode(
            "a",
            {
                class: "links",
                href: "https://www.instagram.com/brotherspizzahauzph/",
                target: "_blank",
                rel: "noopener noreferrer",
            },
            [instagramSVG]
        ),
    ]);

    content.appendChild(contactTitle);
    content.appendChild(contactList);

    render(document.querySelector("#page-content"), content);
}
