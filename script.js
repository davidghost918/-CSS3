const track = document.getElementById('track');
const thumb = document.getElementById('thumb');
const valueLabel = document.getElementById('value');

let isDragging = false;

thumb.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const trackRect = track.getBoundingClientRect();
    let newLeft = e.clientX - trackRect.left;

    // Constrain the thumb within the track
    newLeft = Math.max(0, newLeft);
    newLeft = Math.min(trackRect.width, newLeft);

    thumb.style.left = `${newLeft}px`;

    const value = Math.round((newLeft / trackRect.width) * 100);
    valueLabel.style.left = `${newLeft}px`;
    valueLabel.textContent = value;
  }
});
