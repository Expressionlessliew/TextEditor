const textContainer = document.getElementById("text");
const Savebtn = document.getElementById("save");
const TextInput = document.getElementById("textInput");
let NewData;
let changeWord;
let Wordnew;

const ChangeWord = document.getElementById("replace");
const newWord = document.getElementById("new");
const editbtn = document.getElementById("edit");

Savebtn.addEventListener("click", saveData);
editbtn.addEventListener("click", editData);

TextInput.addEventListener("input", handleChange);
ChangeWord.addEventListener("input", handlechangeWord);
newWord.addEventListener("input", handleWordnew);

function handleChange(event) {
  console.log(event.target.value);
  NewData = event.target.value;
}

function handlechangeWord(event) {
  console.log(event.target.value);
  changeWord = event.target.value;
}

function handleWordnew(event) {
  console.log(event.target.value);
  Wordnew = event.target.value;
}

function saveData() {
  textContainer.innerHTML = NewData;
}


function editData(){
    let currentData = textContainer.innerHTML;
    let editText = currentData
    const newText = editText.replaceAll(`${ChangeWord}`,`${newWord}`);
    textContainer.innerHTML = newText
}