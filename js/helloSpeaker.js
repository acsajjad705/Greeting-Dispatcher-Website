// Directory: module4-solution/js/helloSpeaker.js
// Expose an object with a speak method that logs "Hello Name"

(function (window) {
  var helloSpeaker = {};

  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };

  // Expose to global scope
  window.helloSpeaker = helloSpeaker;
})(window);
