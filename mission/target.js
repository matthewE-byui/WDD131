let selectElem = document.querySelector("select");
let logo = document.querySelector("img");
let body = document.body;

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === "dark") {
        body.classList.add("dark-mode");
        logo.src = "images/byui-logo_white.png"; 
    } else {
        body.classList.remove("dark-mode");
        logo.src = "images/byui-logo_blue.jpg";
    }
}
