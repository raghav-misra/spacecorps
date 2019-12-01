/* Reduce Animations CheckBox */
var animToggle = document.querySelector("#noAnim");
var back = document.querySelector("#back");
animToggle.addEventListener("change", function () {
    if (animToggle.checked)
        back.style.animation = "none";
    else
        back.style.animation = "image-pan infinite 15s ease-in-out";
});
