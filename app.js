let taskInput = document.getElementById("taskInput");
var table = document
  .getElementById("todo-list")
  .getElementsByTagName("tbody")[0];

let inputBtn=document.querySelector(".inputBtn")
var isEditing = false;

function addTask() {
  var task = taskInput.value;
  if (task.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  if (isEditing===false){
    var row = table.insertRow(-1); // (-1= end of table)
    var cell1 = row.insertCell(0);
    cell1.innerHTML = task;

    var cell2 = row.insertCell(1);
    cell2.innerHTML =
      '<button class="editbtn" onclick= "editTask( ' +
      row.rowIndex +
      ')">Edit</button>';

    var cell3 = row.insertCell(2);
    cell3.innerHTML =
      '<button class="delbtn" onclick="deleteTask(this)">Delete</button>';
    taskInput.value = "";
  }
}

function deleteTask(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// Define function to edit task
function editTask(rowId) {
   isEditing=true; 
  var table = document.getElementById("todo-list");
  if (!table) {
    console.error("Table not found.");
    return;
  }

  var row = table.rows[rowId];
  if (!row) {
    console.error("Row not found.");
    return;
  }

  var taskCell = row.cells[0];
  if (!taskCell) {
    console.error("Task cell not found.");
    return;
  }

  var taskText = taskCell.textContent;
  taskInput.value = taskText;
  taskInput.focus();
  taskInput.addEventListener("blur", function () {
    var newTask = this.value;
    taskCell.innerHTML = newTask;
  });
  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      var newTask = this.value;
      taskCell.innerHTML = newTask;
      taskInput.value = "";
    }
  });
  isEditing=false;
}
