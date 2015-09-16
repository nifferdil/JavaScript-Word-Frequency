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
