var translateBtn = document.querySelector("#translate-btn");
var textInput = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#outt");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";  

let serverURL = "https://api.funtranslations.com/translate/shakespeare.json?text=";

async function getTranslation(text){
  let response = await fetch(serverURL + text);
  let data = await response.json();
  outputDiv.innerHTML = data.contents.translated;
}

translateBtn.addEventListener("click", () => {
  let text = textInput.value;
  getTranslation(text);
})

textInput.addEventListener("keydown", (e) => {
  console.log(e);
  if(e.key === "Enter"){
    e.preventDefault();
    translateBtn.click();
  }

})