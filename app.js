/*
 * This a wait three
 * @param a Nothing
 */
function waitThreeSeconds(a) {
  var millis = 3000 + new Date().getTime();

  while (new Date() < millis) {
    console.log('loading... clicking anything on page, will be queued in event queue');
  }
  console.log('waited 3 seconds');
}

var clickTimes = 0;

function clickHandler() {
  clickTimes++;
  console.log('something is clicked ' + clickTimes + ' time.');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();

console.log('finished running the program');
