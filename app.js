var txtinput = document.querySelector("#inputtxt");
var buttonclick = document.querySelector("#btn-translate");
var outputtxt   = document.querySelector("#output");

console.log(txtinput.value);
// outputtxt.innerHTML = "Zinnia Katib";
function minionClick() {
    console.log("clicked");
    console.log("you have typed" + txtinput.value);
    outputtxt.innerText = "Minion Language" + txtinput.value;
};
buttonclick.addEventListener("click", minionClick);