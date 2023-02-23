const cube = document.getElementById('cube');
const width = cube.offsetWidth;
const height = cube.offsetHeight;
const centerX = width / 2;
const centerY = height / 2;

cube.addEventListener('mousemove', (event) => {
  const x = event.clientX - centerX;
  const y = event.clientY - centerY;
  const maxRotation = 30;
  const rotationY = maxRotation * (x / centerX);
  const rotationX = maxRotation * (y / centerY);
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});