import BasePage from "./Base.page";

class RadioButtonPage extends BasePage {

    static visit() {
        cy.visit("/radio-button");
    }

    static get yesRaddioButton() {
        return cy.get("#yesRadio");
    }
    static get impressiveRaddioButton() {
        return cy.get("#impressiveRadio");
    }
    static get noRaddioButton() {
        return cy.get("#noRadio");
    }
}

export default RadioButtonPage;