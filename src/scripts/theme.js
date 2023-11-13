

export const darkAndLight = () => {
    const modeToggleBtn = document.querySelector(".header__btn");
    const modeDarkBody = document.querySelector("html");

    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    if(isDarkMode){
        modeDarkBody.classList.add("dark-mode");
        modeToggleBtn.classList.add("header__btn--dark-mode");
    }
    modeToggleBtn.addEventListener("click", () => {
        modeDarkBody.classList.toggle("dark-mode");
        modeToggleBtn.classList.toggle("header__btn--dark-mode");

        localStorage.setItem("dark-mode", modeDarkBody.classList.contains("dark-mode"));
    });
}
