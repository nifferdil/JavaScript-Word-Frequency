var wordFrequencyArray = function(text) {
  var hash = createObjectHash(convertTextToArray(text));
  var array = convertHashTo2DArray(hash);
  var sortedArray = sortByWordFrequency(array);
  return sortedArray;
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

// Create a 2D array of [key, value] so we can use Array.prototype.sort()
var convertHashTo2DArray = function(hash) {
  var sortableArray = [];
  for (var key in hash){
    sortableArray.push([key, hash[key]]);
  }
  return sortableArray;
};

// Sort keys by value in descending order using functional expressions
// More info on functional expressions: http://mzl.la/19buNlz
var sortByWordFrequency = function(array) {
  array.sort(function(a, b) {return b[1] - a[1]});
  return array;
};

$(document).ready(function() {
  $("form#wordFrequency").submit(function(event) {
    $("ul").empty();
    var text = $("input#userText").val();
    var result = wordFrequencyArray(text);

    for (var i = 0; i < result.length; i++) {
      $("ul").append("<li>" + result[i][0] + " : " + result[i][1] + "</li>");
    }

    $("#result").show();
    event.preventDefault();
  });
});
