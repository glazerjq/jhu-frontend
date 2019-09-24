// Module 4 Assignment Instructions.

(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // part 1
  for (var pos in names) {
    var name = names[pos];
    if (name.charAt(0).toLowerCase() == 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }

  // part 2
  function speakToName(name) {
     if (name.charAt(0).toLowerCase() == 'j') {
      return byeSpeaker.speakSimple(name);
    } else {
      return helloSpeaker.speakSimple(name);
    }
  }
  var names2 = names.map(speakToName);
  names2.forEach(name => console.log(name));

  // part 3
  var reducer = (accumulator, currentName) => {
    if (currentName.charAt(0).toLowerCase() == 'j') {
      accumulator.bye.push(byeSpeaker.speakSimple(currentName));
    } else {
      accumulator.hello.push(helloSpeaker.speakSimple(currentName));
    }
    return accumulator;
  };
  var helloGoodbyes = names.reduce(reducer, {hello: [], bye: []});
  helloGoodbyes.hello.forEach(name => console.log(name));
  helloGoodbyes.bye.forEach(name => console.log(name));
})()