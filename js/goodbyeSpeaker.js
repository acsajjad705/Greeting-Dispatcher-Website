// Directory: module4-solution/js/goodbyeSpeaker.js
// Expose an object with a speak method that logs "Goodbye Name"

(function (window) {
  var goodbyeSpeaker = {};

  goodbyeSpeaker.speak = function (name) {
    console.log("Goodbye " + name);
  };

  // Expose to global scope
  window.goodbyeSpeaker = goodbyeSpeaker;
})(window);
