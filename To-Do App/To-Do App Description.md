# To-Do App Description

This To-Do List has been designed using HTML, CSS, and JavaScript. The core objective is to facilitate users with a pretty simple way of using the application to perform the basic operations of adding, deleting and editing, and checking off tasks. The following is the structure of the whole app along with functionalities:

### Main Functions
1. **Create Tasks:**
   The users can add tasks by means of a text input field accompanied by a "+".
- The form checks that the task field is not blank before adding the task to the list of tasks.

2. **Task Management:**
   A list below the input field will show the specific task
   Tasks can also be marked complete by clicking on the task which then strikes through the text and changes the color to declare completion.
- The '×' button also lets you delete tasks.
3. **Tracking the Status of a Task:**
   - A progress bar displays the percentage of how many tasks are completed.
   - The number indicator "2/3" (how many out of how many completed) is also given.

4. **Persistent Data (Local Storage):
- It saves the task data on the browser's local storage hence, tasks will always be there even after refreshing the page.
  It consists of both uncompleted tasks as well as completed ones.

### UI of User Interface breakdown
- **Input Section for the Task**
  There is an input field at the top of the application where a user can input his/her tasks.
- Large circular "+"" button to the right of the input field where the user can easily add a new task. Under mouse hover this button turns red as the feedback to the user that the action is clickable.

- **Task List:**
Tasks are shown in the list format underneath input. All the tasks have a tiny icon to the right of them that will toggle between checked state to mark them as complete or unchecked as marking them as incomplete based on the task status .

Delete Button
____________________
There is an "×" to the side of every task acting as a delete button that on click will remove the task from viewing and from local storage.

- **Progress Bar and Stats:**
  - A live progress bar at top visually shows to the user how many tasks are completed as the bar fills up as more tasks are completed.
  - The numerical task count makes this even more apparent by showing numbers like "2/3" (that is, two out of three tasks completed); this is centered for a quick glance into the progress.

### Code Summary
- **HTML (index.html):
- Defines the style for the application, including a container that takes up the entire space for the input of the task, the list, and the progress tracker.
  **CSS (style.css):**
    It makes the application look clean and modern with responsive design and intuitive styling in the buttons. It also includes some visual cues such as color changes for complete tasks and hover effects on buttons.
- **JavaScript (script.js):**
It has the management of task creation, deletion, completion, and even the local storage with regard to activities that are ensured to reflect user interactions in a dynamic manner about its interface.

This app offers a very simple yet efficient way to which the users can engage and keep track of their tasks, thereby offering a very smooth and intuitive user experience.