$(document).ready(function () {
  $('#adjustFontColor').click(function () {
    $('#studentInfo').css({
      'font-size': '20px',
      'color': getRandomColor()
    });
  });

  $('#adjustSelfie').click(function () {
    $('#selfie').css({
      'border-radius': '50%',
      'border': '5px solid red'
    });
  });

  $('#changePhoto').click(function () {
    $('#selfie').attr('src', 'life_photo.jpg');
  });

  $('#animatePhoto').click(function () {
    $('#selfie').fadeOut(500, function () {
      $(this).fadeIn(500);
    });
  });

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});