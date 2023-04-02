describe("Probando headers", () => {
  it("Select", function () {
    cy.task("queryDB", "SELECT * FROM pruebas").then((result) => {
      cy.log(result);
    });
  });
});
