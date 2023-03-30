//se quita lo anonimo para que lea el id en los otros it
describe("Probando  status", function () {
  it("Crear empleado", () => {
    cy.request({
      url: "employees",
      method: "POST",
      body: {
        first_name: "Diego",
        last_name: "Tarapuez",
        email: "diegoT@gmail.com",
      },
    }) //crear /employes
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        //guardar id
        const id = response.body.id;
        cy.wrap(id).as("id");
      });
  });

  it("validar que se cree en la bd", () => {
    cy.request("GET", "employees").then((response) => {
      expect(response.body[response.body.length - 1].first_name).to.eq("Diego"); //validando que el ultimo registro que cree sea ese
    });
    /*
    //otra forma
    cy.request({
      url: `employees/${this.id}`,
      method: "GET",
    }).then((response) => {
      expect(response.body.first_name).to.eq("Diego"); //validando que el ultimo registro que cree sea ese
    });*/
  });

  it("moodificar usuario creado", () => {
    cy.request({
      url: `employees/${this.id}`,
      method: "PUT",
      body: {
        first_name: "Diego Fernando",
        last_name: "Tarapuez",
        email: "diegoFT@gmail.com",
      },
    }).then((response) => {
      cy.log(response);
      expect(response.status).to.eq(200);
      expect(response.body.first_name).to.eq("Diego Fernando");
    });
  });

  it("borrar usuario creado", () => {
    cy.request({
      url: `employees/${this.id}`,
      method: "DELETE",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
