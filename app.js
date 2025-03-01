var txtinput = document.querySelector("#inputtxt");
var buttonclick = document.querySelector("#btn-translate");
var outputtxt   = document.querySelector("#output");

// console.log(txtinput.value);

var serverURL  = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input){
    return serverURL+ "?" + "text" +input;
}


// outputtxt.innerHTML = "Zinnia Katib";
function minionClick() {
    inputtxt = txtinput.value;

    fetch(getTranslationURL(inputtxt))
        .then(response => response.json())
        .then(json => {
            var translatedtext = json.contents.translated;
            outputDiv.innerText = translatedtext;
        })
    // outputtxt.innerText = "Minion Language  " + txtinput.value;
    };
buttonclick.addEventListener("click", minionClick);