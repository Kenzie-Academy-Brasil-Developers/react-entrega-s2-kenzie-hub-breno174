context("Register", () => {
  it("Enters the landing page and tries to go to the register page", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.contains("Cadastrar").click();
  });

  it("Tries to register a new user", () => {
    cy.viewport(1440, 900);

    cy.intercept("POST", "/users", {
      statusCode: 201,
      body: {
        name: "Ivan",
        email: "ivan@mail.com",
        id: 1,
      },
    }).as("new-user");

    cy.get("input[name=name]").type("Ivan");
    cy.get("input[name=email]").type("ivan42@mail.com");
    cy.get("input[name=password]").type("aA@12345");
    cy.get("input[name=confsenha]").type("aA@12345");
    cy.get("input[name=contact]").type("8598171717");
    cy.get("input[name=bio]").type("Cara da TI");
    cy.get('[type="radio"]').check("primeiro", { force: true });
    //.should("be.checked")
    //.and("have.value", "primeiro");
    cy.get("button[type=submit]").click();

    cy.contains("Ir para login").click();
  });

  it("Now login with the new user", () => {
    cy.viewport(1440, 900);

    cy.get("input[name=email]").type("ivan42@mail.com");
    cy.get("input[name=password]").type("aA@12345");
    cy.get("button[type=submit]").click();
  });
});
