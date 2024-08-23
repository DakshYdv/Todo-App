let ctr = 1;
function addTodo() {
    const todoVal = document.querySelector("input").value;
    const div = document.createElement("div");
    const innerDiv = document.createElement("div");
    const deleteBtn = document.createElement("button");
    div.setAttribute("id", ctr);
    div.setAttribute("class", "todos");
    innerDiv.innerHTML = todoVal;
    deleteBtn.innerHTML = "Delete";
    div.appendChild(innerDiv);
    div.appendChild(deleteBtn);
    deleteBtn.setAttribute("onclick", "deleteTodo("+ ctr +")");
    document.querySelector(".todo-list").appendChild(div);
    ctr = ctr + 1;
}

function deleteTodo(index) {
    const div = document.getElementById(index);
    div.parentNode.removeChild(div);
}