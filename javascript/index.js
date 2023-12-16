function snowfall(){
let addSnow = () => {

    // code goes here
};
const random = (min, max) => Math.random() * (max - min) + min;
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

let snow = document.createElement('div');

snow.style.position = "fixed";
snow.style.top = "-2px";
snow.style.right = random(0, screenWidth) + "px";
snow.style.width = "10px";
snow.style.height = "10px";
snow.style.backgroundColor = "#fff";
snow.style.borderRadius = "50%";
snow.style.zIndex = "999";
snow.style.pointerEvents = "none";

const animateSnow = () => {
    snow.style.top = parseInt(snow.style.top) + 2 + "px";
    snow.style.right = parseInt(snow.style.right) + random(0, 2) + "px";
    /**
     * If it's out of the screen, move it to the top
     * and randomize it's position
     * */
    if (parseInt(snow.style.top) > screenHeight) {
        snow.style.right = random(0, screenWidth) + "px";
        snow.style.top = parseInt("-" + random(0, 20) + "px");
    }
    window.requestAnimationFrame(animateSnow);
};
window.requestAnimationFrame(animateSnow);

document.body.appendChild(snow);


}