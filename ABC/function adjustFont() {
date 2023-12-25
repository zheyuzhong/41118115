function adjustFont() {
  const studentInfo = document.getElementById('studentInfo');
  const randomColor = getRandomColor();
 
  studentInfo.style.fontSize = '20px';
  studentInfo.style.color = randomColor;
}

function adjustSelfie() {
  const selfie = document.getElementById('selfie');
 
  selfie.style.borderRadius = '50%';
  selfie.style.borderWidth = '5px';
  selfie.style.borderColor = 'red';
}

function changePhoto() {
  const selfie = document.getElementById('selfie');
  selfie.src = 'life_photo.jpg';
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}