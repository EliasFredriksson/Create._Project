import { EXPLANATIONS } from "./explentaions.js";

window.onload = () => {
    initializeModal();
    createExplanations();
    initializeExamples();
};

function initializeModal() {
    let showModalButton = document.getElementById("button-mobile-menu");
    let hideModalButton = document.getElementById("button-mobile-menu-close");

    document.addEventListener("click", (e) => {
        if (
            !e.target.closest("#menu-modal") &&
            e.target.id != "button-mobile-menu"
        ) {
            closeMenu();
        }
    });

    showModalButton.addEventListener("click", (e) => {
        e.preventDefault();
        showMenu();
    });

    hideModalButton.addEventListener("click", (e) => {
        e.preventDefault();
        closeMenu();
    });
}

function closeMenu() {
    let modal = document.getElementById("menu-modal");
    modal.classList.remove("show-modal");
    modal.classList.add("hide-modal");
}

function showMenu() {
    let modal = document.getElementById("menu-modal");
    modal.classList.remove("hide-modal");
    modal.classList.add("show-modal");
}

function initializeExamples() {
    let examples = document.querySelectorAll(".__explanation .__example");
    examples.forEach((example) => {
        example.addEventListener("focus", (e) => {
            e.target.style.height = e.target.scrollHeight + "px";
            e.target.parentNode.children[0].classList.add("hide-hint");
            setTimeout(() => {
                e.target.parentNode.children[0].style.display = "none";
            }, 200);
        });
    });
    examples.forEach((example) => {
        example.addEventListener("blur", (e) => {
            e.target.style.height = "100px";
        });
    });
}

function createExplanations() {
    let explanationsContainer = document.getElementById(
        "container-explanations"
    );
    explanationsContainer.innerHTML = "";

    EXPLANATIONS.forEach((e, index) => {
        let section = document.createElement("section");
        section.className = "__explanation";

        // ### TEXT WRAPPER ###
        let textWrapper = document.createElement("div");
        textWrapper.className = "__text-wrapper";

        // ### TITLE ###
        let title = document.createElement("div");
        title.className = "__title";
        title.innerHTML = e.title;

        // ### TEXT ###
        let text = document.createElement("div");
        text.className = "__text";

        e.text.forEach((textSection) => {
            let subTextSection = document.createElement("div");
            subTextSection.className = "__sub-section";

            let subTitle = document.createElement("h3");
            subTitle.className = "__sub-title";
            subTitle.innerHTML = textSection.sub_title;

            let subText = document.createElement("span");
            subText.className = "__sub-text";
            subText.innerHTML = textSection.sub_text;

            subTextSection.appendChild(subTitle);
            subTextSection.appendChild(subText);

            text.appendChild(subTextSection);
        });

        textWrapper.appendChild(title);
        textWrapper.appendChild(text);

        // ### EXAMPLE #########################################
        let exampleContainer = document.createElement("div");
        exampleContainer.className = "__example-container";

        // HINT
        let hint = document.createElement("span");
        hint.className = "__hint";
        hint.innerHTML = "Touch to expand";

        // EXAMPLE
        let example = document.createElement("textarea");
        example.className = "__example";
        example.readOnly = true;
        let tempString = "";
        e.example.forEach((example) => {
            tempString += `${example.input}\n// ${example.output}\n\n`;
        });
        example.innerHTML = tempString;

        exampleContainer.appendChild(hint);
        exampleContainer.appendChild(example);
        // ####################################################

        section.appendChild(textWrapper);
        section.appendChild(exampleContainer);

        explanationsContainer.appendChild(section);

        // ### LINE SEPERATOR ###
        if (index != EXPLANATIONS.length - 1) {
            let seperator = document.createElement("div");
            seperator.className = "__seperator";
            explanationsContainer.appendChild(seperator);
        }
        // We fetch the height now sense its not possible before its inside the DOM
    });
}
