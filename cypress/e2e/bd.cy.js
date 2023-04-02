describe("Probando headers", () => {
  it("Select", function () {
    cy.task("queryDB", "SELECT * FROM pruebas").then((result) => {
      cy.log(result);
    });
  });
  it("Insert", function () {
    cy.task(
      "queryDB",
      "INSERT INTO pruebas(nombre,appellido) VALUES('Jennyfer','Belalcazar')"
    ).then((result) => {
      cy.log(result);
      expect(result.affectRows).to.eq(1);
      cy.wrap(result.insertId).and("id");
    });
  });
  it("Select uno", function () {
    cy.task("queryDB", `SELECT * FROM pruebas where id=${this.id}`).then(
      (result) => {
        cy.log(result);
        expect(result[0].nombre).to.eq("Jennyfer");
      }
    );
  });

  it("update uno", function () {
    cy.task(
      "queryDB",
      `UPDATE pruebas SET nombre = 'Jenn' where id=${this.id}`
    ).then((result) => {
      cy.log(result);
      expect(result[0].nombre).to.eq("Jennyfer");
    });
  });

  it("Borrar", function () {
    cy.task("queryDB", `DELETE FROM pruebas where id=${this.id}`).then(
      (result) => {
        cy.log(result);
        //importante afectar que afecto uno
        expect(result.affectRows).to.eq(1);
        expect(result.serverStatus).to.eq(2); //exitoso
      }
    );
  });
});
