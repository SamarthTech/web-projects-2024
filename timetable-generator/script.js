document.getElementById('timetable-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const subject = document.getElementById('subject').value;
  const startTime = document.getElementById('start-time').value;
  const endTime = document.getElementById('end-time').value;
  const selectedDays = getSelectedDays();

  if (subject && startTime && endTime && selectedDays.length > 0) {
      addTimetableEntry(subject, startTime, endTime, selectedDays);
  } else {
      alert("Please fill in all the fields.");
  }

  this.reset();
});

function getSelectedDays() {
  const days = document.querySelectorAll('#days input[type="checkbox"]:checked');
  return Array.from(days).map(day => day.value);
}

function addTimetableEntry(subject, startTime, endTime, selectedDays) {
  const timetableBody = document.querySelector('#timetable tbody');
  let rowExists = false;
  let targetRow;

  Array.from(timetableBody.rows).forEach(row => {
      const rowTime = row.cells[0].textContent;
      if (rowTime === `${startTime} - ${endTime}`) {
          rowExists = true;
          targetRow = row;
      }
  });

  if (rowExists) {
      selectedDays.forEach(day => {
          const dayIndex = getDayIndex(day);
          targetRow.cells[dayIndex].innerHTML = subject;
      });
  } else {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `<td>${startTime} - ${endTime}</td><td></td><td></td><td></td><td></td><td></td><td></td>`;

      selectedDays.forEach(day => {
          const dayIndex = getDayIndex(day);
          newRow.cells[dayIndex].innerHTML = subject;
      });

      insertSortedRow(newRow, startTime, timetableBody);
  }
}

function insertSortedRow(newRow, startTime, timetableBody) {
  const existingRows = Array.from(timetableBody.rows);

  if (existingRows.length === 0) {
      timetableBody.appendChild(newRow);
  } else {
      let inserted = false;
      for (let i = 0; i < existingRows.length; i++) {
          const rowTime = existingRows[i].cells[0].textContent.split(' - ')[0];
          if (compareTimes(startTime, rowTime)) {
              timetableBody.insertBefore(newRow, existingRows[i]);
              inserted = true;
              break;
          }
      }

      if (!inserted) {
          timetableBody.appendChild(newRow); 
      }
  }
}

function compareTimes(time1, time2) {
  return time1 < time2;
}

function getDayIndex(day) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days.indexOf(day) + 1;
}