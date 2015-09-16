describe("wordFrequency", function() {
  it("returns word frequncy in the order they appear", function() {
    var text = "Java is fun. But I think JavaScript is also fun. Yay java and javascript!";
    var hash = {java: 2, is: 2, fun: 2, but: 1, i: 1, think: 1, javascript: 2, also: 1, yay: 1, and: 1};
    expect(wordFrequency(text)).to.eql(hash);
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
