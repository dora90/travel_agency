//video slider
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide")
const contents = document.querySelectorAll(".content")


//make buttons/slides active
var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active")
    })

    slides.forEach((slide) => {
        slide.classList.remove("active")
    })

    contents.forEach((content) => {
        content.classList.remove("active")
    })


    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}


btns.forEach((btn , i) => {
   btn.addEventListener("click" , () =>{
    sliderNav(i);
   })
})

//hamburger menu
const menu_btn = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')
menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
})
