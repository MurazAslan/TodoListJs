let inp = document.querySelector(".inpVal");
let addBtn = document.querySelector(".addBtn");
let ul = document.querySelector(".ul");
let arr = [];

function addTodo() {
  let inpVal = inp.value.trim();
  inpVal ? arr.push(inpVal) : "";

  addToPage();
}

function addToPage() {
  ul.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.textContent = arr[i];
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.textContent = `remove`;
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.textContent = `edit`;

    li.append(removeBtn, editBtn);
    ul.append(li);
  }
  inp.value = "";
}

function removeTodo(e) {
  let todoElement = e.target.parentElement.firstChild.textContent;
  if (arr.includes(todoElement)) {
    arr.splice(arr.indexOf(todoElement), 1);
    addToPage();
  }
}

function editTodo(e) {
  let todoElement = e.target.parentElement.firstChild.textContent;
  inp.value = todoElement
  if (arr.includes(todoElement)) {
    arr.splice(arr.indexOf(todoElement), 1);
  }

}

ul.addEventListener("click", function (e) {
  let content = e.target.textContent;
  
  if (content === "remove") {
    removeTodo(e);
  }
  if (content === "edit") {
    editTodo(e);
  }
});

addBtn.addEventListener("click", function () {
  addTodo(), addToPage();
});
