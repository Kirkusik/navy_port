export default function menuHaandler() {
    const menuToggleBtn = document.querySelector(".menu-toggle");

    menuToggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("page__body--w-popup");
        document
            .querySelector(".page__header")
            .classList.toggle("page__header--menu-show");
        document
            .querySelector(".page__nav")
            .classList.toggle("page__nav--visible");

        this.querySelector(".menu-toggle-open").classList.toggle(
            "menu-toggle-visible"
        );
        this.querySelector(".menu-toggle-close").classList.toggle(
            "menu-toggle-visible"
        );
    });
}
