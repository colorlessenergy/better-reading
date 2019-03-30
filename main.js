// make reading easier!!
// by focusing on a word at a time.
let sentence = "Hi I am Brian Munoz and I am a Programmer from Long Beach, California that focuses in the Front-End of Web Development. I like to bring designs to life with HTML, CSS and JavaScript. My goal is to bring technical solutions to people. I make blogs about web development on Mondays and Fridays. Most of my work is open source on github."

// break the sentence into words
let sentenceBreak = sentence.split(" ");

window.addEventListener("keyup", function (ev) {
  controlText(ev.keyCode);
});

let currentWordCounter = 0;
let displayTextOnDom = document.querySelector("#text");
displayTextOnDom.innerHTML = sentenceBreak[0];

var displayTextOnScreen;
let textRunning = false;

// start and stop the words showing up on the screen
function controlText (keycode) {
  if (keycode === 32) {
    if (textRunning) {
      textRunning = false;
      window.clearInterval(displayTextOnScreen);
    } else {
      let wordScreenTime = 250;
      textRunning = true;
      displayTextOnScreen = window.setInterval(displayText, wordScreenTime)
    }
  }
}

function displayText() {
  if (currentWordCounter === sentenceBreak.length-1) {
    currentWordCounter = 0;
    displayTextOnDom.innerHTML = sentenceBreak[0];
    textRunning = false;
    return window.clearInterval(displayTextOnScreen);
  }

  currentWordCounter += 1;
  displayTextOnDom.innerHTML = sentenceBreak[currentWordCounter];
}