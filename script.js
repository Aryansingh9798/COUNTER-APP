let count = 0;

function updateDisplay(){
  document.getElementById("count").innerHTML = count;
}

function addHistory(action){
  let history = document.getElementById("history");

  let listItem = document.createElement("li");

  let time = new Date().toLocaleTimeString();

  listItem.innerHTML =
    action + " → Count: " + count + " (" + time + ")";

  history.prepend(listItem);
}

function increase(){
  count++;
  updateDisplay();
  addHistory("Increased");
}

function decrease(){
  count--;
  updateDisplay();
  addHistory("Decreased");
}

function reset(){
  count = 0;
  updateDisplay();
  addHistory("Reset");
}

function toggleTheme(){
  document.body.classList.toggle("dark");
}