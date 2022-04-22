window.onload = () => {
    initializeModal();
    scrollToContact();
    initializeContactForm();
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

function scrollToContact() {
    document.getElementById("middle").scrollIntoView();
}

function initializeContactForm() {
    let form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.reportValidity();
        if (form.checkValidity()) {
            alert("Message sent successfully!");
        }
    });
}
