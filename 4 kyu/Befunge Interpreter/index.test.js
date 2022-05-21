describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(interpret('>987v>.v\nv456<  :\n>321 ^ _@'), '123456789');
  });
});
