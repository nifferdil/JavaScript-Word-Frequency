var wordFrequency = function(text) {
  return createObjectHash(convertTextToArray(text));
};

var convertTextToArray = function(text) {
  return text.toLowerCase().replace(/[^\w\s]/ig, "").split(" ");
};

var createObjectHash = function(array) {
  var hash = {};
  for (var i in array){
    var key = array[i];
    if (hash[key] === undefined){
      hash[key] = 1;
    } else {
      hash[key] += 1;
    }
  }
  return hash;
};

$(document).ready(function() {
  $("form#wordFrequency").submit(function(event) {
    var text = $("input#userText").val();
    var result = wordFrequency(text);
    for (var word in result){
      $("ul").append("<li>" + word + " : " + result[word] + "</li>");
    }
    console.log(result);


    // $(".unstyled").show();
    $("#result").show();
    event.preventDefault();
  });
});
