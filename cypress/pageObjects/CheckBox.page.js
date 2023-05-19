import cypressConfig from "../../cypress.config";
import BasePage from "./Base.page";

class CheckBoxPage extends BasePage {

    static visit() {
        cy.visit("/checkbox");
    }

    static get expandButton() {
        return cy.get(".rct-option-expand-all");
    }

    static get checkboxTitles() {
        return cy.get(".rct-title");
    }

}

export default CheckBoxPage;