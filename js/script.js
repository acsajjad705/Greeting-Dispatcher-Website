// Directory: module4-solution/js/script.js
// Main script that loops through names and uses the two libraries

(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim"
  ];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      // Use goodbyeSpeaker for names starting with j or J
      goodbyeSpeaker.speak(name);
    } else {
      // Use helloSpeaker for all other names
      helloSpeaker.speak(name);
    }
  }
})();
