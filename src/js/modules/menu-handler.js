export default function menuHaandler() {
    const menuToggleBtn = document.querySelector(".menu-toggle");

    menuToggleBtn.addEventListener("click", function () {
        this.querySelector(".menu-toggle-open").classList.toggle(
            "menu-toggle-visible"
        );
        this.querySelector(".menu-toggle-close").classList.toggle(
            "menu-toggle-visible"
        );
    });
}
