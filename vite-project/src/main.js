import "./style.css";
const songs = [
  { title: "Electric Feel", artist: "MGMT", genre: "Pop" },
  { title: "Dreams", artist: "Fleetwood Mac", genre: "Rock" },
  { title: "Lose Yourself to Dance", artist: "Daft Punk", genre: "Pop" },
  { title: "The Less I Know the Better", artist: "Tame Impala", genre: "Pop" },
  { title: "Blinding Lights", artist: "The Weeknd", genre: "Pop" },
  {
    title: "Dog Days Are Over",
    artist: "Florence + The Machine",
    genre: "Pop",
  },
  { title: "Take Me Out", artist: "Franz Ferdinand", genre: "Rock" },
  { title: "Somebody Else", artist: "The 1975", genre: "Pop" },
  { title: "Pumped Up Kicks", artist: "Foster the People", genre: "Pop" },
  { title: "Adore You", artist: "Harry Styles", genre: "Pop" },
  { title: "Paper Planes", artist: "M.I.A.", genre: "Hip Hop" },
  { title: "Riptide", artist: "Vance Joy", genre: "Pop" },
  { title: "Feel Good Inc.", artist: "Gorillaz", genre: "Hip Hop" },
  { title: "Midnight City", artist: "M83", genre: "Pop" },
  { title: "Bad Habit", artist: "Steve Lacy", genre: "Alternative" },
  { title: "Clocks", artist: "Coldplay", genre: "Alternative" },
  { title: "Heat Waves", artist: "Glass Animals", genre: "Indie Pop" },
  { title: "Young Folks", artist: "Peter Bjorn and John", genre: "Indie Pop" },
  { title: "Stolen Dance", artist: "Milky Chance", genre: "Indie Folk" },
  { title: "Holocene", artist: "Bon Iver", genre: "Indie Folk" },
];
const container = document.querySelector(".section");
function inject(item) {
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class=songtitles><h3>song: ${item.title} </h3>
      <h3>artist: ${item.artist}</h3>
    </div>`
  );
}
songs.forEach((song) => {
  inject(song);
});
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
function createSong() {
  let imginput = document.getElementById("imginput").value;
  let input = document.getElementById("input").value;
  let ainput = document.getElementById("ainput").value;
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class=songtitles><h2>song: ${input}</h2>
      <h2>artist: ${ainput}</h2>
    <img src="${imginput}" alt="newimage"></div>`
  );
}
const submitbutton = document.querySelector(".submitbutton");
submitbutton.addEventListener("click", function () {
  createSong();
});

// stephen curry shrine
const stephcontainer = document.querySelector(".stephencurry");
const steph = document.getElementById("steph");
steph.addEventListener("click", function () {
  audioPlayer.play();
  stephcontainer.insertAdjacentHTML(
    "afterbegin",
    `<img src="data:image/webp;base64,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" alt="newimage">`
  );
});
const audioPlayer = document.getElementById("myAudio");
//i finished the steph shrine
const filterTypes = [
  "All",
  "Indie Folk",
  "Indie Pop",
  "Alternative",
  "Pop",
  "Hip Hop",
  "Rock",
];
const filter = document.querySelector(".filter");

filterTypes.forEach((type) => {
  filter.insertAdjacentHTML(
    "beforeend",
    `<button class="filter-btn" data-type="${type}">${type}</button>`
  );
});
function filterItems(type) {
  container.innerHTML = "";
  let filtered = songs;
  if (type !== "all") filtered = songs.filter((item) => item.genre === type);
  filtered.forEach((item) => inject(item));
  if (type === "All") {
    songs.forEach((song) => {
      inject(song);
    });
  }
}

const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-type");
    filterItems(type);
  });
});
/* 
make Array
inject songs for each item in the Array */
