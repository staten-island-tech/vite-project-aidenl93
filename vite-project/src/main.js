import "./style.css";
const songs = {};

function inject(item) {
  const container = (document.querySelector("#app").innerHTML = `
    <h2>song: ${item.title}</h2>
    <h2>artist: ${item.artist}</h2>
    
    `);
}
const body = document.querySelector(".body");
const darkmode = document.querySelector(".darkmode");
darkmode.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  darkmode.style.visibility = "hidden";
  document.insertAdjacentHTML();
});
/* 
make Array
inject songs for each item in the Array */
