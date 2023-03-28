describe("Probando headers", () => {
  it("Debe de validar el header y el content type", () => {
    cy.request("employees") //endpoint /employes
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });
});
