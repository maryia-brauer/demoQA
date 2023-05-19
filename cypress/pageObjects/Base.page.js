class BasePage {
    //
    static get utl() {
        return "/";
    }

    static visit() {
        cy.visit(this.url);
    }

    static get textSuccess() {
        return cy.get(".text-success");
    }
}

export default BasePage;