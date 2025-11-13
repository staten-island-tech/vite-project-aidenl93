import "./style.css";
const songs = {};
setupCounter(document.querySelector("#counter"));
function inject(item) {
  const container = (document.querySelector("#app").innerHTML = ` <h2>song:</h2>
    <h2>artist: </h2>
    `);
}

/* 
make Array
inject songs for each item in the Array */
