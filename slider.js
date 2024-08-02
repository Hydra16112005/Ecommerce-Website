let slideleft = document.getElementById("slider-left")
let slideright = document.getElementById("slider-right")
let imgitem = document.querySelectorAll(".imageitem")

console.log(imgitem.length-1)

let startslider = 0

let endslider = (imgitem.length-1) * 100

slideleft.addEventListener("click",()=>{
    if(startslider < 0){
        startslider += 100;
    }
    imgitem.forEach(element =>{
        element.style.transform = ` translateX(${startslider}%) `; 
    })
})
slideright.addEventListener("click",()=>{
    if(startslider >= -endslider+100){
        startslider -= 100;
    }
    imgitem.forEach(element =>{
        element.style.transform = ` translateX(${startslider}%) `; 
    }) 
})  

let scroll = document.getElementById("scrolltop")

scroll.addEventListener("click",()=>{
    window.scrollTo(0,0);
})


let cat = document.getElementById('cat')

cat.addEventListener('click',()=>{
    window.scrollTo(0,900);
})

let menf = document.getElementById('menfashion')
menf.addEventListener('click',()=>{
    window.scrollTo(0,600);
})

let news = document.getElementById('new')

news.addEventListener('click',()=>{
    window.scrollTo(0,1700);
})
