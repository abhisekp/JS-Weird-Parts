/*
 * Demo to illustrate event queueing in Javascript
 * Read: http://ejohn.org/blog/how-javascript-timers-work/
 */

/*
 * A waiting function to simulate a long calculation
 * @param seconds time to wait
 */
function waitSeconds(seconds) {
  var millis = seconds * 1000 + new Date().getTime();
  var start = new Date();
  console.log('Waiting ' + seconds + ' seconds... clicking anything on page, will be queued in event queue');
  var now,
    alerted = false;
  while ((now = new Date()) < millis) {
    if (!alerted && ((now - start) / 1000 > (seconds / 2))) {
      alert('What!! ' + ((new Date() - start) / 1000));
      alerted = true;
    }
  }

  console.log('Waited ' + seconds + ' seconds');
}

var clickTimes = 0;

function clickHandler() {
  clickTimes++;
  console.log('Something is clicked ' + clickTimes + ' time at ' + new Date());
}

document.addEventListener('click', clickHandler);

// setTimeout fire after 3s
// and makes setInterval fire after every 2s
setTimeout(setInterval.bind(this, function () {
  console.log('Interval fires in ' + new Date());
}, 2000), 3000);

var start;
// Start clicking after browser refresh
console.log('Start Clicking at ' + (start = new Date()));
waitSeconds(10); // simulates a long JS calculation

// queue clearInterval after program and all event queues are completed
//setTimeout(clearInterval.bind(this, id), 0);

var end;
// Mark Synchronous, Single Thread JS Program finished
console.log('Finished running the program at ' + (end = new Date()));
console.log('Program Completed in ' + ((end - start) / 1000) + ' seconds.');
