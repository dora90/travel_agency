let products = {
  data: [
    {
      destination: "Amsterdam",
      category: "Europe",
      price: "550",
      image: "../Images/packages_images/amsterdam.jpg",
      link: "../Pages/amsterdam.html",
    },

    {
      destination: "Barcelona",
      category: "Europe",
      price: "650",
      image: "../Images/packages_images/barcelona.jpg",
      link: "../Pages/barcelona.html",
    },

    {
      destination: "Madrid",
      category: "Europe",
      price: "550",
      image: "../Images/packages_images/madrid.jpg",
      link: "../Pages/madrid.html",
    },

    {
      destination: "Lisbon",
      category: "Europe",
      price: "550",
      image: "../Images/packages_images/lisbon.jpg",
      link: "../Pages/lisbon.html",
    },

    {
      destination: "Berlin",
      category: "Europe",
      price: "350",
      image: "../Images/packages_images/berlin.jpg",
      link: "../Pages/berlin.html",
    },

    {
      destination: "Bratislava",
      category: "Europe",
      price: "150",
      image: "../Images/packages_images/bratislava.jpg",
      link: "../Pages/bratislava.html",
    },

    {
      destination: "Budapest",
      category: "Europe",
      price: "280",
      image: "../Images/packages_images/budapest1.jpg",
      link: "../Pages/budapest.html",
    },

    {
      destination: "Dubrovnik",
      category: "Europe",
      price: "180",
      image: "../Images/packages_images/dubrovnic.jpg",
      link: "../Pages/dubrovnik.html",
    },

    {
      destination: "Cappadocia",
      category: "Europe",
      price: "300",
      image: "../Images/packages_images/kapadokya.jpg",
      link: "../Pages/cappadocia.html",
    },

    {
      destination: "Krakow",
      category: "Europe",
      price: "400",
      image: "../Images/packages_images/krakow.jpg",
      link: "../Pages/krakow.html",
    },

    {
      destination: "Warsaw",
      category: "Europe",
      price: "450",
      image: "../Images/packages_images/warszawa.jpg",
      link: "../Pages/warsaw.html",
    },

    {
      destination: "London",
      category: "Europe",
      price: "450",
      image: "../Images/packages_images/london.jpg",
      link: "../Pages/london.html",
    },

    {
      destination: "Malta",
      category: "Europe",
      price: "180",
      image: "../Images/packages_images/malta.jpg",
      link: "../Pages/malta.html",
    },

    {
      destination: "Venetia",
      category: "Europe",
      price: "380",
      image: "../Images/packages_images/venecia.jpg",
      link: "../Pages/venetia.html",
    },

    {
      destination: "Rome",
      category: "Europe",
      price: "280",
      image: "../Images/packages_images/rome.jpg",
      link: "../Pages/rome.html",
    },

    {
      destination: "Vienna",
      category: "Europe",
      price: "400",
      image: "../Images/packages_images/vienna.jpg",
      link: "../Pages/vienna.html",
    },

    {
      destination: "Prague",
      category: "Europe",
      price: "400",
      image: "../Images/packages_images/prague.jpg",
      link: "../Pages/prague.html",
    },

    {
      destination: "Paris",
      category: "Europe",
      price: "550",
      image: "../Images/packages_images/Paris.jpg",
      link: "../Pages/paris.html",
    },

    {
      destination: "Bora Bora",
      category: "International",
      price: "1350",
      image: "../Images/packages_images/bora-bora.jpg",
      link: "../Pages/bora.html",
    },

    {
      destination: "Phi Phi Islands",
      category: "International",
      price: "1550",
      image: "../Images/packages_images/pfi pfi islands.jpg",
      link: "../Pages/phi.html",
    },

    {
      destination: "Dubai",
      category: "International",
      price: "750",
      image: "../Images/packages_images/dubai.jpg",
      link: "../Pages/dubai.html",
    },

    {
      destination: "Egypt",
      category: "International",
      price: "1250",
      image: "../Images/packages_images/egypt.jpg",
      link: "../Pages/egypt.html",
    },

    {
      destination: "Cuba",
      category: "International",
      price: "1550",
      image: "../Images/packages_images/cuba.jpg",
      link: "../Pages/cuba.html",
    },

    {
      destination: "New York City",
      category: "International",
      price: "1550",
      image: "../Images/packages_images/nyc.jpg",
      link: "../Pages/nyc.html",
    },

    {
      destination: "Crete",
      category: "Greek-Islands",
      price: "650",
      image: "../Images/packages_images/crete.jpg",
      link: "../Pages/crete.html",
    },

    {
      destination: "Santorini",
      category: "Greek-Islands",
      price: "550",
      image: "../Images/packages_images/santorini.jpg",
      link: "../Pages/santorini.html",
    },

    {
      destination: "Zakynthos",
      category: "Greek-Islands",
      price: "450",
      image: "../Images/packages_images/zakynthos.jpg",
      link: "../Pages/zakynthos.html",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h2");
  name.classList.add("destination");
  name.innerText = i.destination.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h3");
  price.innerText = "Price: " + "€" + i.price;
  container.appendChild(price);

  //button
  let button_explore = document.createElement("button");
  button_explore.innerText = "Explore now";
  container.appendChild(button_explore);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);

  

  // button leads to single package page
  button_explore.addEventListener("click", () => {
     location.href = i.link;
    console.log(location.href);
  });
}


//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".destination");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
// window.onload = () => {
//   filterProduct("all");
// };

//hamburger menu
const menu_btn = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.mobile-nav')
menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
})