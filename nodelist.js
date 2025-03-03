let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
    buttons = document.querySelectorAll(".myButtons");
});
});