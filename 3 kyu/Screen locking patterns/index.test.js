describe("Tests", () => {
  it("test", () => {
Test.assertEquals(countPatternsFrom('A', 0), 0);
Test.assertEquals(countPatternsFrom('A', 10), 0);
Test.assertEquals(countPatternsFrom('B', 1), 1);
Test.assertEquals(countPatternsFrom('C', 2), 5);

Test.assertEquals(countPatternsFrom('D', 3), 37);
Test.assertEquals(countPatternsFrom('E', 4), 256);
Test.assertEquals(countPatternsFrom('E', 8), 23280);
  });
});
