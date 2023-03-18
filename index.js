const textContainer = document.getElementById("text");
const Savebtn = document.getElementById("save");
const TextInput = document.getElementById("textInput");
let NewData;
let changeWord;
let Wordnew;

const ChangeWordInput = document.getElementById("changeWord");
const newWordInput = document.getElementById("Wordnew");
const editbtn = document.getElementById("edit");

Savebtn.addEventListener("click", saveData);
editbtn.addEventListener("click", editData);

TextInput.addEventListener("input", handleChange);
ChangeWordInput.addEventListener("input", handlechangeWord);
newWordInput.addEventListener("input", handleWordnew);

function handleChange(event) {
  NewData = event.target.value;
}

function handlechangeWord(event) {
  changeWord = event.target.value;
}

function handleWordnew(event) {
  Wordnew = event.target.value;
}

function saveData() {
  textContainer.innerHTML = NewData;
}


function editData(){
    let currentData = textContainer.innerHTML;
    let editText = currentData
    const newText = editText.replaceAll(`${changeWord}`,`${Wordnew}`);
    
    textContainer.innerHTML = newText;
    console.log(currentData)
}