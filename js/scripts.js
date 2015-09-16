var wordFrequency = function(text) {
  return createObjectHash(convertTextToArray(text));
}

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
  $("form#wordorder").submit(function(event) {
    var text = $("input#text").val();
    var result = wordFrequency(text);

      $(".word").text(word);
      if (!result) {
        $(".not").text("not");
      } else {
        $(".not").empty();
      }

    $("#result").show();
    event.preventDefault();
  });
});
