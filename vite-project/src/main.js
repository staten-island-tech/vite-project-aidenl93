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

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<h2>song: ${item.title}</h2>
    <h2>artist: ${item.artist}</h2>`
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
/* 
make Array
inject songs for each item in the Array */
