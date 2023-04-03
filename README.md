En el curso aprendí hacer peticiones a la API para validar el estado que recibo o si la petición que recibí contiene alguna características en específico por ejemplo que contenga el nombre “Jennyfer”, también a validar la conexión a una bd haciendo peticiones y validando estados.

Validar el status:

- cy.request({ url: "employees/3", failOnStatusCode: false }) .its("status") .should("eq", 404); //valida que falle la petición
- ` `cy.request("employees").its("status") .should("eq", 200); //fue exitoso

Validar body:

- cy.request("employees/1") .its("body") .its("first\_name") .should("be.equal", "Javier");
- ` `cy.request("employees/1").then((response) => { expect(response.status).to.be.equal(200); expect(response.headers["content-type"]).to.be.equal( "application/json; charset=utf-8" );})

Validar header:

- cy.request("employees") //endpoint /employes .its("headers") .its("content-type") .should("include", "application/json");

Crud REST: archivo requests.cy.js

- Info adicional: https://blog.knoldus.com/crud-operations-how-to-perform-them-with-cypress/

Crud GraphQL: archivo grapql.cy.js

- Info adicional: https://docs.cypress.io/guides/end-to-end-testing/working-with-graphql

Validar conexion BD:

`	`Dependiendo del tipo de base de datos debes configurar los plugins, ya teniendo la conexión podemos hacer un crud, ejemplo en el archivo bd.cy.js 
