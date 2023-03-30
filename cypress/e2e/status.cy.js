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

  it("Debe de validar el status code fallido y mensaje de error", () => {
    cy.request({
      url: "https://pokeapi.co/api/v2/4545",
      failOnStatusCode: false,
    }).then((responde) => {
      expect(responde.status).to.be.eq(404);
      expect(responde.body).to.be.eq("Not Found");
    });
  });

  it("Debe de validar el status code fallido y mensaje de error con array", () => {
    cy.request({
      url: "https://rickandmortyapi.com/api/location/3434343",
      failOnStatusCode: false,
    }).then((responde) => {
      expect(responde.status).to.be.eq(404);
      expect(responde.body.error).to.be.eq("Location not found");
    });
  });

  //otra forma
  it("Debe de validar el status code fallido y mensaje de error con array 2", () => {
    cy.request({
      url: "https://rickandmortyapi.com/api/location/3434343",
      failOnStatusCode: false,
    }).then((responde) => {
      expect(responde.status).to.be.eq(404);
      expect(responde.body).to.have.property("error", "Location not found");
    });
  });
});
