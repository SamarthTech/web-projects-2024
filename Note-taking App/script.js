// Targeting the parent element
const noteContainer = document.querySelector('.note__container');
const noteModal = document.querySelector(".note__modal__body");

// Global store
let globalStore = [];

// Function to create a new card
const newCard = ({ id, noteTitle, noteCategory, noteDescription }) => `
  <div class="col-lg-4 col-md-6" id=${id}>
    <div class="card m-2">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success" id="${id}" onclick="editCard.apply(this, arguments)">
          <i class="fas fa-pencil-alt" id="${id}" onclick="editCard.apply(this, arguments)"></i>
        </button>
        <button type="button" class="btn btn-outline-danger" id="${id}" onclick="deleteCard.apply(this, arguments)">
          <i class="fas fa-trash-alt" id="${id}" onclick="deleteCard.apply(this, arguments)"></i>
        </button>
      </div>
      <div class="card-body">
        <h5 class="card-title">${noteTitle}</h5>
        <p class="card-text">${noteDescription}</p>
        <span class="badge bg-primary">${noteCategory}</span>
      </div>
      <div class="card-footer text-muted">
        <button type="button" id="${id}" class="btn btn-outline-primary float-end" data-bs-toggle="modal"
          data-bs-target="#shownote" onclick="viewmore.apply(this, arguments)">View more</button>
      </div>
    </div>
  </div>`;

// Function to load data from localStorage
const loadData = () => {
  const getInitialData = localStorage.note; // if null, then
  if (!getInitialData) return;

  const { cards } = JSON.parse(getInitialData);

  cards.map((noteObject) => {
    const createNewNote = newCard(noteObject);
    noteContainer.insertAdjacentHTML("beforeend", createNewNote);
    globalStore.push(noteObject);
  });
};

// Function to update localStorage
const updateLocalStorage = () => {
  localStorage.setItem("note", JSON.stringify({ cards: globalStore }));
};

// Function to save changes
const saveChanges = () => {
  const noteData = {
    id: `${Date.now()}`, // generating a unique id for each card
    noteTitle: document.getElementById('title').value,
    noteCategory: document.getElementById('type').value,
    noteDescription: document.getElementById('description').value
  };

  const createNewNote = newCard(noteData);
  noteContainer.insertAdjacentHTML("beforeend", createNewNote);

  globalStore.push(noteData);

  // Update localStorage
  updateLocalStorage();
};

// Function to delete a card
const deleteCard = (event) => {
  event = window.event;
  const targetID = event.target.id;
  const tagname = event.target.tagName; // BUTTON OR I

  globalStore = globalStore.filter((noteObject) => noteObject.id !== targetID);

  updateLocalStorage();

  if (tagname === "BUTTON") {
    return noteContainer.removeChild(
      event.target.parentNode.parentNode.parentNode // col-lg-4
    );
  }
//   console.log(noteContainer)
  return noteContainer.removeChild(
    event.target.parentNode.parentNode.parentNode.parentNode // col-lg-4
  );
};

// Function to edit a card
const editCard = (event) => {
  event = window.event;
  const targetID = event.target.id;
  const tagname = event.target.tagName;

  let parentElement;
  if (tagname === "BUTTON") {
    parentElement = event.target.parentNode.parentNode;
  } else {
    parentElement = event.target.parentNode.parentNode.parentNode;
  }

  let noteTitle = parentElement.childNodes[3].childNodes[1];
  let noteDescription = parentElement.childNodes[3].childNodes[3];
  let noteCategory = parentElement.childNodes[3].childNodes[5];
  let submitBtn = parentElement.childNodes[5].childNodes[1];

  noteTitle.setAttribute("contenteditable", "true");
  noteDescription.setAttribute("contenteditable", "true");
  noteCategory.setAttribute("contenteditable", "true");
  submitBtn.setAttribute("onclick", "saveEditChanges.apply(this, arguments)");
  submitBtn.innerHTML = "Save Changes";

  submitBtn.removeAttribute("data-bs-toggle");
  submitBtn.removeAttribute("data-bs-target");
};

// Function to save edited changes
const saveEditChanges = (event) => {
  event = window.event;
  const targetID = event.target.id;
  const tagname = event.target.tagName;

  let parentElement;
  if (tagname === "BUTTON") {
    parentElement = event.target.parentNode.parentNode;
  } else {
    parentElement = event.target.parentNode.parentNode.parentNode;
  }

  let noteTitle = parentElement.childNodes[3].childNodes[1];
  let noteDescription = parentElement.childNodes[3].childNodes[3];
  let noteCategory = parentElement.childNodes[3].childNodes[5];
  let submitBtn = parentElement.childNodes[5].childNodes[1];

  const updatedData = {
    noteTitle: noteTitle.innerHTML,
    noteDescription: noteDescription.innerHTML,
    noteCategory: noteCategory.innerHTML
  };

  globalStore = globalStore.map((note) => {
    if (note.id === targetID) {
      return {
        id: note.id,
        noteTitle: updatedData.noteTitle,
        noteCategory: updatedData.noteCategory,
        noteDescription: updatedData.noteDescription
      };
    }
    return note;
  });

  updateLocalStorage();

  noteTitle.setAttribute("contenteditable", "false");
  noteDescription.setAttribute("contenteditable", "false");
  noteCategory.setAttribute("contenteditable", "false");

  submitBtn.setAttribute("onclick", "viewmore.apply(this, arguments)");
  submitBtn.setAttribute("data-bs-toggle", "modal");
  submitBtn.setAttribute("data-bs-target", "#showNote");

  submitBtn.innerHTML = "View more";
};

// Function to generate modal content
const htmlModalContent = ({ id, noteTitle, noteDescription, noteCategory }) => {
  const date = new Date(parseInt(id));
  return `
    <div id=${id}>
      <div class="text-sm text-muted">Created on ${date.toDateString()}</div>
      <h2 class="my-5 mt-5" style="display:inline;">${noteTitle}</h2>
      <span class="badge bg-primary">${noteCategory}</span>
      <p class="lead mt-2">${noteDescription}</p>
    </div>`;
};

// Function to view more details
const viewmore = (event) => {
  event = window.event;
  const targetID = event.target.id;

  const getNote = globalStore.filter(({ id }) => id === targetID);
	// console.log(getNote[0]);
  noteModal.innerHTML = htmlModalContent(getNote[0]);
};


