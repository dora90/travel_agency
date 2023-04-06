//dom
//validation function
var email = document.getElementById("email");
var error = document.getElementById("error");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;



function validation() {
    if (!email.value.match(pattern)) {
      error.innerText ='Invalid email';
      error.style.color = "red"
    }else {
        error.innerText='Your email has been sent!';
        error.style.color = "green"
    }

  };

  //hamburger menu
const menu_btn = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')
menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
})