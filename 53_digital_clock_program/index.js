function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const clockElement = document.getElementById('clock');
  clockElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${meridiem}`;
}

updateClock();
setInterval(updateClock, 1000);
