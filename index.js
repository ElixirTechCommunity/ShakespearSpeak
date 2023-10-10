var translateBtn = document.querySelector("#translate-btn");
var textInput = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#outt");

let serverURL = "https://api.funtranslations.com/translate/shakespeare.json?text=";

async function getTranslation(text){
  try{
    let response = await fetch(serverURL + text);
    let data = await response.json();
    outputDiv.innerHTML = data.contents.translated;
  } 
  catch(error){
    alert("Something wrong with server :')");
  }
}

translateBtn.addEventListener("click", () => {
  let text = textInput.value;
  getTranslation(text);
})

textInput.addEventListener("keydown", (e) => {

  if(e.key === "Enter"){
    e.preventDefault();
    translateBtn.click();
  }

})