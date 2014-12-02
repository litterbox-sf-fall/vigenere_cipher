describe("vigenere", function() {
  describe("#encode", function() {
    it("encodes a message with a keyword", function() {
      expect(vigenere.encode("hello", "banana")).toEqual("ieylb");
    });
  })
  describe("#decode", function() {
    it("decodes a message with a keyword", function() {
      expect(vigenere.decode("doageaus", "banana")).toEqual("congrats");
    });
  })
});