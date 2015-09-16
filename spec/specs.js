describe("wordFrequencyArray", function() {
  it("returns 2D array of [key, value] by value", function() {
    var text = "Fun java. Yay java!";
    var sortedArray = [["java", 2], ["fun", 1], ["yay", 1]];
    expect(wordFrequencyArray(text)).to.eql(sortedArray);
  });
});

describe("convertTextToArray", function() {
  it("returns only words split into an array", function() {
    var text = "Stackoverflow's users... are, awesome!!!";
    var array = ["stackoverflows", "users", "are", "awesome"];
    expect(convertTextToArray(text)).to.eql(array);
  });
});

describe("createObjectHash", function() {
  it("returns a list of all the unique words and how many times they appeared", function() {
    var array = ["java", "js", "js", "java", "android", "mocha"];
    var hash = {java: 2, js: 2, android: 1, mocha: 1};
    expect(createObjectHash(array)).to.eql(hash);
  });
});

describe("convertHashTo2DArray", function() {
  it("returns an 2D array of [key, value] which stores hash keys and its values", function() {
    var hash = {java: 2, js: 2, android: 1, mocha: 1};
    var array = [["java", 2], ["js", 2], ["android", 1], ["mocha", 1] ];
    expect(convertHashTo2DArray(hash)).to.eql(array);
  });
});

describe("sortByWordFrequency", function() {
  it("returns sorted keys by value in descending order using functional expressions", function() {
    var array = [["java", 2], ["js", 3], ["android", 1], ["mocha", 1]];
    var sortedArray = [["js", 3], ["java", 2], ["android", 1], ["mocha", 1]];
    expect(sortByWordFrequency(array)).to.eql(sortedArray);
  });
});
