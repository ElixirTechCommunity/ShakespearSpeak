var translateBtn = document.querySelector("#translate-btn");
var textInput = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#outt");

let serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslation(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandle(error) {
  console.log("Error occurred. Fix it!", error);
  alert("Something wrong with the server :')");
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

// Listen for the "keydown" event on the input field
textInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default behavior (form submission)
    clickHandle(); // Call your clickHandle function to trigger the translation
  }
});

translateBtn.addEventListener("click", clickHandle);
