let movies = [
  {
    name: "loki",
    des: "Loki is an American television series created by Michael Waldron for the streaming service Disney.",
    image: "./images/slider 1.PNG",
  },
  {
    name: "falcon and the winter soldier",
    des: "Falcon and the Winter Soldier is an American television series created for the streaming platform Disney+.",
    image: "./images/slider 2.PNG",
  },
  {
    name: "WandaVision",
    des: "WandaVision is an American television series created for the streaming service Disney+",
    image: "./images/slider 3.PNG",
  },

  {
    name: "Raya and the Last Dragon",
    des: "Raya and the Last Dragon is an animated Disney film released in 2021.",
    image: "./images/slider 4.PNG",
  },

  {
    name: "Luca",
    des: "Luca is a Disney-Pixar animated film released in 2021.",
    image: "./images/slider 5.PNG",
  },
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // create DOM Elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all element
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// video cards

const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// cards sliders

let cardContainers = document.querySelectorAll(".card-container");
let preBtns = document.querySelectorAll(".pre-btn");
let nxtBtns = document.querySelectorAll(".nxt-btn");

// Function to scroll the card container to the left
function scrollLeft(container) {
  container.scrollLeft -= container.clientWidth;
}

// Function to scroll the card container to the right
function scrollRight(container) {
  container.scrollLeft += container.clientWidth;
}

// Attach click event listeners to previous and next buttons
preBtns.forEach((preBtn, index) => {
  preBtn.addEventListener("click", () => {
    scrollLeft(cardContainers[index]);
  });
});

nxtBtns.forEach((nxtBtn, index) => {
  nxtBtn.addEventListener("click", () => {
    scrollRight(cardContainers[index]);
  });
});
