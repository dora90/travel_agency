//dom
const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector(".locationInput");
const search =document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll('.city');

//default city when the page loads
let cityInput= "Athens";

  
//add submit event to the form
btn.addEventListener('click', (e) =>{
    if(search.value.length==0){
        alert("Please type a city name");
    }else{
        cityInput = search.value;
        fetchWeatherData();
        search.value="";
    }
    e.preventDefault();
});


//fetch and display data from the weather API
function fetchWeatherData() {
  fetch(`http://api.weatherapi.com/v1/current.json?key=fcd7090b6d0c457392d122348230803&q=${cityInput}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //add temperature and weather condition
    temp.innerHTML = data.current.temp_c + "&#8451";
    conditionOutput.innerHTML = data.current.condition.text;

    //add the name of the city in the screen
    nameOutput.innerHTML = data.location.name;
   
   //  icon 
   icon.src = data.current.condition.icon

   //weather details
   cloudOutput.innerHTML = data.current.cloud + "%";
   humidityOutput.innerHTML = data.current.humidity + "%";
   windOutput.innerHTML = data.current.wind_kph + "km/h";

  })
}

fetchWeatherData();

//hamburger menu
const menu_btn = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')
menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
})