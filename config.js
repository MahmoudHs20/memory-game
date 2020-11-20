// Variables
const imagez = document.querySelectorAll(".card");
const endScreen = document.getElementById("endScreen");
const side = document.getElementById("side");
const game = document.getElementById("game");
const logo = document.getElementById("logo");
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
  "./images/t1.jfif",
  "./images/t2.jfif",
  "./images/t3.jfif",
  "./images/t4.jfif",
  "./images/t5.jfif",
  "./images/t6.jfif",
  "./images/t7.jfif",
  "./images/t8.jfif",
  "./images/t9.jfif",
  "./images/t10.jfif",
  "./images/t11.jfif",
  "./images/t12.jfif",
  "./images/t13.jfif",
  "./images/t14.jfif",
  "./images/t15.jfif",
  "./images/t16.jfif",
  "./images/t17.jfif",
  "./images/t18.jfif",
  "./images/t19.jfif",
  "./images/t1.jfif"
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
    soundWin.play();
    setTimeout(function() {
      endScreen.style.display = "block";
    }, 1700);
  } else {
    loseSound.play();
    setTimeout(function() {
      images[pair[0].index].setAttribute("src", "back.jpg");
      images[pair[1].index].setAttribute("src", "back.jpg");
    }, 3000);
  }
}
images.forEach(im => {
  im.onclick = function() {
    if (tries === 0) {
      im.classList.add("show");
      im.setAttribute("show", "");
      im.setAttribute("src", pics[images.indexOf(im)]);
      window.setTimeout(function() {
        im.classList.remove("show");
      }, 3000);

      pair[0] = {
        value: pics[images.indexOf(im)],
        index: images.indexOf(im)
      };

      tries++;
    } else {
      if (im.hasAttribute("show")) {
      } else {
        images[pair[0].index].removeAttribute("show");
        im.setAttribute("src", pics[images.indexOf(im)]);
        tries = 0;
        pair[1] = {
          value: pics[images.indexOf(im)],
          index: images.indexOf(im)
        };
        check();
      }
    }
  };
});

restart.onclick = () => {
  endScreen.style.display = "none";
  images[pair[0].index].setAttribute("src", "back.jpg");
  images[pair[1].index].setAttribute("src", "back.jpg");
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