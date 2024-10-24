// Set the target date and time for the countdown
const targetDate = new Date("January 01, 2025 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time difference between the current date/time and the target date/time
  const timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the calculated time in the HTML elements
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Check if the countdown has expired
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "Countdown expired";
  }
}, 1000);

// Dark mode toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeIcon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
