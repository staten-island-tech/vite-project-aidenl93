import "./style.css";
const songs = {};

function inject(item) {
  const container = (document.querySelector("#app").innerHTML = `
    <h2>song: ${item.title}</h2>
    <h2>artist: ${item.artist}</h2>
    
    `);
}
const textbox = document.querySelector(".textbox");
const body = document.querySelector(".body");
const lightmode = document.querySelector(".lightmode");
const darkmode = document.querySelector(".darkmode");
darkmode.addEventListener("click", () => {
  body.style.backgroundColor = "black";
});
lightmode.addEventListener("click", () => {
  body.style.backgroundColor = "white";
});
const subbutton = document.querySelector(".subbutton");
subbutton.addEventListener("click", () => {
  console.log(textbox);
});
/* 
make Array
inject songs for each item in the Array */
