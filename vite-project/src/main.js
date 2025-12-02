import "./style.css";
const songs = [
  { title: "Electric Feel", artist: "MGMT" },
  { title: "Dreams", artist: "Fleetwood Mac" },
  { title: "Lose Yourself to Dance", artist: "Daft Punk" },
  { title: "The Less I Know the Better", artist: "Tame Impala" },
  { title: "Blinding Lights", artist: "The Weeknd" },
  { title: "Dog Days Are Over", artist: "Florence + The Machine" },
  { title: "Take Me Out", artist: "Franz Ferdinand" },
  { title: "Somebody Else", artist: "The 1975" },
  { title: "Pumped Up Kicks", artist: "Foster the People" },
  { title: "Adore You", artist: "Harry Styles" },
  { title: "Paper Planes", artist: "M.I.A." },
  { title: "Riptide", artist: "Vance Joy" },
  { title: "Feel Good Inc.", artist: "Gorillaz" },
  { title: "Midnight City", artist: "M83" },
  { title: "Bad Habit", artist: "Steve Lacy" },
  { title: "Clocks", artist: "Coldplay" },
  { title: "Heat Waves", artist: "Glass Animals" },
  { title: "Young Folks", artist: "Peter Bjorn and John" },
  { title: "Stolen Dance", artist: "Milky Chance" },
  { title: "Holocene", artist: "Bon Iver" },
];
const container = document.querySelector(".section");
function inject(item) {
  container.insertAdjacentHTML(
    "afterbegin",
    `<div><h2>song: ${item.title} artist: ${item.artist}</h2>
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
function returnText() {
  let input = document.getElementById("input").value;
  container.insertAdjacentHTML("afterbegin", `<h2>${input}</h2>`);
}
const submitbutton = document.querySelector(".submitbutton");
submitbutton.addEventListener("click", function () {
  returnText();
});
function returnImage() {
  let imginput = document.getElementById("imginput").value;
  container.insertAdjacentHTML(
    "afterbegin",
    `<img src="${imginput}" alt="newimage">`
  );
}
const imgbutton = document.getElementById("imgbutton");
imgbutton.addEventListener("click", function () {
  returnImage();
});
/* 
make Array
inject songs for each item in the Array */
