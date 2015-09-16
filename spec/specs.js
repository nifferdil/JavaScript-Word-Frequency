describe("isPalindrome", function() {
  it("returns true if message is a palindrome", function() {
    expect(isPalindrome("Starats")).to.equal(true);
  });

  it("returns false if message is a palindrome", function() {
    expect(isPalindrome("hello")).to.equal(false);
  });

  it("returns true if message is a palindrome", function() {
    expect(isPalindrome("Was it a cat I saw?")).to.equal(true);
  });
});
