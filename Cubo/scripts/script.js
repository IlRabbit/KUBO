const c = document.getElementsByClassName("cubo");
const next = document.querySelectorAll(".btn")[0];
const prev = document.querySelectorAll(".btn")[1];


let gradi = 0;

function rotate() {
    let transformation = "rotateY(" + gradi + "deg)";
    Array.from(c).forEach((e)=>{e.style.transform = transformation;});
}

next.addEventListener("click", () => {
    gradi += 90;
    rotate();
});

prev.addEventListener("click", () => {
    gradi -= 90;
    rotate();
});