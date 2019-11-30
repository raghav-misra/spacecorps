let animToggle = document.querySelector("#noAnim") as HTMLInputElement;
let back = document.querySelector("#back") as HTMLDivElement;
animToggle.addEventListener("change", () => {
    if(animToggle.checked) back.style.animation = "none";
    else back.style.animation = "image-pan infinite 15s ease-in-out";
});