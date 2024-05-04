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
    // console.log(i);
}

// slider();
setInterval(slider, 3000);



let hover = () =>{
    let womenNav = document.querySelector("#womenNav");
    let womenNavHover = document.querySelector("#womenNavHover");
    let menNav = document.querySelector("#menNav");
    let menNavHover = document.querySelector("#menNavHover");

    console.log(womenNavHover)
    womenNav.addEventListener('mouseover',()=>{
        womenNavHover.classList.remove('class','none');
    })
    womenNav.addEventListener('mouseout',()=>{
        womenNavHover.classList.add('class','none');
    })
    womenNavHover.addEventListener('mouseout',()=>{
        womenNavHover.classList.add('class','none');
    });
    womenNavHover.addEventListener('mouseover',()=>{
        womenNavHover.classList.remove('class','none');
    });


    menNav.addEventListener('mouseover',()=>{
        menNavHover.classList.remove('class','none');
    })
    menNav.addEventListener('mouseout',()=>{
        menNavHover.classList.add('class','none');
    })
    menNavHover.addEventListener('mouseout',()=>{
        menNavHover.classList.add('class','none');
    });
    menNavHover.addEventListener('mouseover',()=>{
        menNavHover.classList.remove('class','none');
    });
}
hover();

let searchbutton = () => {
    let searchButton = document.getElementById("searchButton");
    let searchDiv = document.getElementById("searchDiv");

    searchButton.addEventListener('click',()=>{
        searchDiv.style.top = "8%";
        console.log(searchDiv.style.top);
    })
}
searchbutton();

// $(function(){
//     $(menNav).trigger(function(){
//         // $(searchButton).hide();
//         $(searchButton).hide();
//         // $(this).hide();
//     })
//     $("li").hide();
// });