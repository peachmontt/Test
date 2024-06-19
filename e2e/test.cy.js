import { locators } from "../pages/login";

const username = Cypress.env("Test").username;
const password = Cypress.env("Test").password;

describe("Test Pecode", () => {
  it("Test task", () => {
    cy.visit("https://www.pecodesoftware.com/qa-portal/greet.php");
    cy.get(locators.loginButton).click();
    cy.get(locators.errorMessage2).should(
      "have.text",
      "Please enter username."
    );
    cy.get(locators.errorMessage3).should(
      "have.text",
      "Please enter your password."
    );
    cy.get(locators.userNameField).should("be.visible").type(username);
    // we can save get login information from Fixtures.
    // Commands
    // Or database
    cy.get(locators.passwordField).should("be.visible").type(password);
    cy.get(locators.loginButton).should("be.visible").click();
    cy.get(locators.errorMessage1).should(
      "have.text",
      "No account found with that username."
    );
    cy.get(locators.img).should("be.visible");
    cy.get(locators.text).should("have.text", "AQA internship Login");
  });
});
