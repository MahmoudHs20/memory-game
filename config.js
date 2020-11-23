// Pre-render
var Preimgs = [];
[1, 2, 3, 4, 5, 6].map(n => {
  let newImg = document.createElement("img");
  newImg.setAttribute("src", "./'images/s" + `${n}` + ".jpg");
  Preimgs.push(newImg);
});
// Variables
const imagez = document.querySelectorAll(".card");
const endScreen = document.getElementById("endScreen");
const side = document.getElementById("side");
const game = document.getElementById("game");
const logo = document.getElementById("logo");
const countDown = document.getElementById("countDown");
const restart = document.getElementById("restart");
const listItems = document.querySelectorAll("#show");
const age = document.getElementById("age");
const city = document.getElementById("city");
const pass = document.getElementById("pass");
const username = document.getElementById("username");
const loginBtn = document.getElementById("loginbtn");
const loginForm = document.getElementById("login");
const images = Array.from(imagez);
const soundWin = document.getElementById("soundWin");
const loseSound = document.getElementById("loseSound");

var pair = [
  { value: null, index: null },
  { value: null, index: null }
];
var pics = [];

var tartus = [
  "./images/s1.jpg",
  "./images/s2.jpg",
  "./images/s3.jpg",
  "./images/s4.jpg",
  "./images/s5.jpg",
  "./images/s6.jpg",
  "./images/s7.jpg",
  "./images/s8.jpg",
  "./images/s9.jpg",
  "./images/s10.jpg",
  "./images/s11.jpg",
  "./images/s12.jpg",
  "./images/s13.jpg",
  "./images/s14.jpg",
  "./images/s15.jpg",
  "./images/s16.jpg",
  "./images/s17.jpg",
  "./images/s18.jpg",
  "./images/s19.jpg",
  "./images/s1.jpg"
];
var damas = [
  "./images/d1.jfif",
  "./images/d2.jfif",
  "./images/d3.jfif",
  "./images/d4.jfif",
  "./images/d5.jfif",
  "./images/d6.jfif",
  "./images/d7.jfif",
  "./images/d8.jfif",
  "./images/d9.jfif",
  "./images/d10.jfif",
  "./images/d11.jfif",
  "./images/d12.jfif",
  "./images/d13.jfif",
  "./images/d14.jfif",
  "./images/d15.jfif",
  "./images/d16.jfif",
  "./images/d17.jfif",
  "./images/d18.jfif",
  "./images/d19.jfif",
  "./images/d1.jfif"
];
var kids = [
  "./images/k1.jfif",
  "./images/k2.jfif",
  "./images/k3.jfif",
  "./images/k4.jfif",
  "./images/k5.jfif",
  "./images/k6.jfif",
  "./images/k7.jfif",
  "./images/k8.jfif",
  "./images/k9.jfif",
  "./images/k10.jfif",
  "./images/k11.jfif",
  "./images/k12.jfif",
  "./images/k13.jfif",
  "./images/k14.jfif",
  "./images/k15.jfif",
  "./images/k16.jfif",
  "./images/k17.jfif",
  "./images/k18.jfif",
  "./images/k19.jfif",
  "./images/k1.jfif"
];
var tries = 0;
function getReadyAnimation() {
  let counter = 2;
  setInterval(() => {
    countDown.firstElementChild.firstElementChild.textContent =
      counter <= 3 ? counter : "Go";
    counter += 1;
  }, 1600);
  setTimeout(() => {
    countDown.style.display = "none";
  }, 6000);
}
///
loginBtn.onclick = function() {
  if (
    age.value !== "" &&
    city.value !== "" &&
    pass.value !== "" &&
    username.value !== ""
  ) {
    loginForm.style.display = "none";
    game.style.display = "block";
    logo.style.display = "inline-block";
    countDown.style.visibility = "visible";
    getReadyAnimation();
    side.style.display = "block";
    if (age.value < 12) {
      pics = kids;
    } else if (city.value === "Tartus") {
      pics = tartus;
    } else if (city.value === "Damas") {
      pics = damas;
    }
  }
};
// Functionality
function check() {
  if (pair[0].value === pair[1].value) {
    window.setTimeout(() => soundWin.play(), 900);
    setTimeout(function() {
      endScreen.style.display = "block";
    }, 1700);
  } else {
    window.setTimeout(() => loseSound.play(), 900);
    setTimeout(function() {
      images[pair[0].index].setAttribute("src", "back.png");
      images[pair[1].index].setAttribute("src", "back.png");
      pair = [
        { value: null, index: null },
        { value: null, index: null }
      ];
    }, 3000);
  }
}
images.forEach(im => {
  im.onclick = function() {
    if (tries === 0 && pair[0].value === null && pair[1].value === null) {
      window.setTimeout(() => {
        im.classList.add("show");
      }, 500);
      im.setAttribute("show", "");
      im.setAttribute("src", pics[images.indexOf(im)]);
      window.setTimeout(function() {
        im.classList.remove("show");
      }, 2500);

      pair[0] = {
        value: pics[images.indexOf(im)],
        index: images.indexOf(im)
      };
      tries++;
    } else if (pair[1].value === null && tries === 1) {
      if (im.hasAttribute("show")) {
      } else {
        images[pair[0].index].removeAttribute("show");
        im.setAttribute("src", pics[images.indexOf(im)]);
        window.setTimeout(() => {
          im.classList.add("show");
        }, 500);
        tries = 0;

        pair[1] = {
          value: pics[images.indexOf(im)],
          index: images.indexOf(im)
        };
        window.setTimeout(function() {
          im.classList.remove("show");
        }, 2500);
        check();
      }
    }
  };
});

restart.onclick = () => {
  endScreen.style.display = "none";
  images[pair[0].index].setAttribute("src", "back.png");
  images[pair[1].index].setAttribute("src", "back.png");
  pair = [
    { value: null, index: null },
    { value: null, index: null }
  ];
  // shuffle();
};

Array.from(listItems).map(list => {
  list.addEventListener("click", () => {
    list.firstElementChild.nextElementSibling.classList.toggle("expand");
  });
});

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
///
