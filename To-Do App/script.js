const inputBox = document.getElementById('task');
const listContainer = document.getElementById('listContainer');
const numberDisplay = document.getElementById('number');
const progress = document.getElementById('progress');

let tasks = [];
let completedTasks = 0;

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = '\u00d7'; // Cross icon
    span.className = 'delete-button';
    li.appendChild(span);

    inputBox.value = '';

    tasks.push({ text: li.innerHTML, completed: false });
    updateStats();
    saveData();
  }
}

// Update progress and stats
function updateStats() {
  const totalTasks = tasks.length;
  completedTasks = tasks.filter(task => task.completed).length;
  numberDisplay.textContent = `${completedTasks}/${totalTasks}`;

  const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
  progress.style.width = `${progressPercentage}%`;
}

// Save data to local storage
function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Show tasks from local storage
function showTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
    tasks = storedTasks;
    tasks.forEach(task => {
      let li = document.createElement('li');
      li.innerHTML = task.text;
      if (task.completed) {
        li.classList.add('checked');
      }
      listContainer.appendChild(li);

      let span = document.createElement('span');
      span.innerHTML = '\u00d7';
      li.appendChild(span);
    });
    updateStats();
  }
}

// Toggle task completion and save
listContainer.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    const index = Array.from(listContainer.children).indexOf(e.target);
    tasks[index].completed = !tasks[index].completed;
    updateStats();
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    const li = e.target.parentElement;
    const index = Array.from(listContainer.children).indexOf(li);
    tasks.splice(index, 1);
    li.remove();
    updateStats();
    saveData();
  }
}, false);

showTasks();
