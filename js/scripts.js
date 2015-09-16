var isPalindrome = function(word) {
  var myWordArray = word.toLowerCase().replace(/\W+/g, "").split("");
  var leftIndex = 0;
  var rightIndex = myWordArray.length - 1;

  while (leftIndex <= rightIndex) {
    if (myWordArray[leftIndex] === myWordArray[rightIndex]) {
      leftIndex += 1;
      rightIndex -= 1;
    } else {
      return false;
    }
  }
  return true;
}

$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    var word = $("input#word").val();
    var result = isPalindrome(word);

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
