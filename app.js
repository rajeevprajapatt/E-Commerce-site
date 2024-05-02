let arr = ["homepage-images/catban-020230630115529.webp", "homepage-images/catban-320230729113349.webp", "homepage-images/catban-120230729114515.webp", "homepage-images/catban-120230803115418.webp", "homepage-images/catban-120230602125221.webp"]
let box = document.querySelector("#box");
let boxImage = document.querySelector("#boxImage");

console.log("runniigg");
boxImage.setAttribute("src", arr[0]);

let i = 0;
let slider = () => {


    if (i == 4) {
        i = -1;
    }
    i++;
    boxImage.setAttribute("src", arr[i]);
    console.log(i);
}

// slider();
setInterval(slider, 3000);