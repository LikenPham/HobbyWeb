const userinput = document.querySelector('#user-input')
const userclose = document.querySelector('#user-close')

userinput.addEventListener("click",function(){
    document.querySelector('.input-user').style.display = "flex"
})
userclose.addEventListener("click",function(){
    document.querySelector('.input-user').style.display = "none"
})
/*-------------------------*/
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.slider-content-bottom img')
let index = 0
rightbtn.addEventListener ("click", function(){
    index = index + 1
    if(index > imgNumber.length - 1){
        index = 0
    }
    document.querySelector(".slider-content-bottom").style.right = index * 100+"%"
})
leftbtn.addEventListener ("click", function(){
    index = index - 1
    if(index <= 0){
        index = imgNumber.length - 1
    }
    document.querySelector(".slider-content-bottom").style.right = index * 100+"%"
})
/*-------------------------*/
function imgAuto () {
    index++
    if(index > imgNumber.length - 1){
        index = 0
    }
    document.querySelector(".slider-content-bottom").style.right = index * 100+"%"
}
setInterval(imgAuto,5000)
/*-------------------------*/
const rightbtnnew = document.querySelector('.fa-chevron-right-two')
const leftbtnnew = document.querySelector('.fa-chevron-left-two')
const imgNumbernew = document.querySelectorAll('.slider-product-one-content-items')
rightbtnnew.addEventListener ("click", function(){
    index = index + 1
    if(index > imgNumbernew.length - 1){
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100+"%"
})
leftbtnnew.addEventListener ("click", function(){
    index = index - 1
    if(index <= 0){
        index = imgNumbernew.length - 1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100+"%"
})

function imgAutoNew () {
    index++
    if(index > imgNumbernew.length - 1){
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100+"%"
}
setInterval(imgAutoNew,5000)