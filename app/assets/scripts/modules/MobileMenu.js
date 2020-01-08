class MobileMenu {
    constructor() {
        this.mobileIcon = document.querySelector(".site-header__menu-icon");
        this.menuContent = document.querySelector(".site-header__menu-content");
        this.siteHeader = document.querySelector(".site-header");
        this.events();
    }

    events() {
        this.mobileIcon.addEventListener("click", () => this.toggleMenu())
    }

    toggleMenu() {
        this.menuContent.classList.toggle("site-header__menu-content--is-visible");
        this.siteHeader.classList.toggle("site-header--is-expanded");
        this.mobileIcon.classList.toggle("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;