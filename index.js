var translateBtn = document.querySelector("#translate-btn");
var textInput = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#outt");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

let serverURL = "https://api.funtranslations.com/translate/shakespeare.json";
function getTranslation(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandle(error) {
  console.log("Fixed the error", error);
  alert("Something wrong with server :') ");
}
function clickHandle() {
  var textIn = textInput.value;
  fetch(getTranslation(textIn))
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      var result = json.contents.translated;
      outputDiv.innerText = result;
    })
    .catch(errorHandle);
}

translateBtn.addEventListener("click", clickHandle());
