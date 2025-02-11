var imagePathway = document.querySelector(".poster-img");
var titlePathway = document.querySelector(".poster-title");
var quotePathway = document.querySelector(".poster-quote");
var randomButton = document.querySelector(".show-random");
var showMakeButton = document.querySelector(".show-form");
var showSavedButton = document.querySelector(".show-saved");
var backMainButton = document.querySelector(".back-to-main");
var takeBackButton = document.querySelector(".show-main")
var mainPage = document.querySelector(".main-poster");
var formPage = document.querySelector(".poster-form");
var savedPage = document.querySelector(".saved-posters");
var showNewPoster = document.querySelector(".make-poster");
var savePosterButton = document.querySelector(".save-poster");
var container = document.querySelector(".saved-posters-grid");

var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;
var miniPosters;

randomButton.addEventListener("click", displayRandomPoster);
showMakeButton.addEventListener("click", changeFormsMain);
showSavedButton.addEventListener("click", changeMainSaved);
backMainButton.addEventListener("click", changeMainSaved);
takeBackButton.addEventListener("click", changeFormsMain);
showNewPoster.addEventListener("click", function() {
  showNewPoster.setAttribute("type", "button");
  changeFormsMain();
  grabCustomValues();
});
savePosterButton.addEventListener("click",  savePoster);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayRandomPoster() {
  var randImgIndex = getRandomIndex(images);
  var randTitleIndex = getRandomIndex(titles);
  var randQuoteIndex = getRandomIndex(quotes);
  currentPoster = new Poster(images[randImgIndex], titles[randTitleIndex], quotes[randQuoteIndex]);
  displayCustomPoster();
};

function changeFormsMain() {
  formPage.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");
};

function changeMainSaved() {
  savedPage.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");
};

function grabCustomValues() {
  var url = document.getElementById("poster-image-url").value;
  var word = document.getElementById("poster-title").value;
  var quote = document.getElementById("poster-quote").value;
  images.push(url);
  titles.push(word);
  quotes.push(quote);
  
  currentPoster = new Poster(url, word, quote);
  displayCustomPoster();
};

function displayCustomPoster() {
  imagePathway.src= currentPoster.imageURL;
  titlePathway.innerText = currentPoster.title;
  quotePathway.innerText = currentPoster.quote;
};

function savePoster() {
 if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
    createMiniPosters();
  };
};

function createMiniPosters() {
  container.innerHTML += `<div class="mini-poster">
    <img src="${currentPoster.imageURL}"/>
    <h2>${currentPoster.title}</h2>
    <h4>${currentPoster.quote}</h4>
  </div>`
 
  miniPosters = container.children;
  addListeners();
};

function addListeners() {
  for (var i = 0; i < miniPosters.length; i++) {
    miniPosters[i].addEventListener('dblclick', deletePoster);
  };
};

function deletePoster(evt) {
  var parent = evt.currentTarget.parentElement;
  var target = evt.currentTarget;
  var delImg = target.querySelector("img").getAttribute('src');
  var delTitle = target.querySelector("h2").innerText.toLowerCase();
  var delQuote = target.querySelector("h4").innerText;
  var index = savedPosters.findIndex(poster => poster.title === delTitle && poster.imageURL === delImg && poster.quote === delQuote);

  savedPosters.splice(index, 1);
  parent.removeChild(target);
};

document.onload = displayRandomPoster();