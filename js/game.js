var categories;
var randomNumber;
var lastRandomNumber;

$.ajax({
    url: 'categories.txt'
  }).done(function(content) {

    // normalize the line breaks, then split into lines
    categories = content.replace(/\r\n|\r/g, '\n').trim().split('\n');

    // only set up the click handler if there were lines found
    if (categories && categories.length) {
      $('#new-game').on('click', function () {
        // loop to prevent repeating the last random number
        while (randomNumber === lastRandomNumber) {
          randomNumber = parseInt(Math.random() * categories.length);
          // check to prevent infinite loop
          if (categories.length === 1) { break; }
        }
        // keep track of the last random number
        lastRandomNumber = randomNumber;

        // show the corresponding line
        $('#category').text(categories[randomNumber]);
      });
        // loop to prevent repeating the last random number
        while (randomNumber === lastRandomNumber) {
          randomNumber = parseInt(Math.random() * categories.length);
          // check to prevent infinite loop
          if (categories.length === 1) { break; }
        }
        // keep track of the last random number
        lastRandomNumber = randomNumber;

        // show the corresponding line
        $('#category').text(categories[randomNumber]);
    }
  });
