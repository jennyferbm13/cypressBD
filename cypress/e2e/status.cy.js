describe("Probando  status", () => {
  it("Debe de validar el status code exitoso", () => {
    cy.request("employees") //endpoint /employes
      .its("status")
      .should("eq", 200); //fue exitoso
  });
  //evitar que cypress devuelva la prueba por fallos
  it("Debe de validar el status code fallido", () => {
    cy.request({ url: "employees/3", failOnStatusCode: false }) //endpoint /employes/3 va buscar el employ con el id 3, como la idea es que valide que falle se le debe poner lo adicional
      .its("status")
      .should("eq", 404); //esatdo de falla porque ese lo borramos
  });
});
