import CheckBoxPage from "../pageObjects/CheckBox.page";
import TextBoxPage from "../pageObjects/TextBox.page";
import RadioButtonPage from "../pageObjects/RadioButton.page";
describe("DemoQA spec", () => {
  context("Textbox scenarios", () => {
    beforeEach(() => {
      //cy.visit("/text-box");
    });
    it("Textbox - positive case", () => {
      // Set Full Name
      TextBoxPage.usernameField.type("Donald Duck");
      // Set Email
      TextBoxPage.emailField.type("random@email.com");
      // Set Current Address
      TextBoxPage.currentAddressField.type("Valmiera - A");
      // Set Permanent Address
      TextBoxPage.permanentAddressField.type("Valmiera - B");
      // Click Submit
      TextBoxPage.submitButton.click();
      // Validate that the values are correct
      TextBoxPage.nameInfo.should("have.text", "Name:Donald Duck");
      TextBoxPage.emailInfo.should("have.text", "Email:random@email.com");
      TextBoxPage.currentAddressInfo.should(
        "contain.text",
        "Current Address :Valmiera - A"
      );
      TextBoxPage.permanentAddressInfo.should(
        "contain.text",
        "Permananet Address :Valmiera - B"
      );
    });

    it("textbox - negative case", () => {
      //Set email field with incorrect value
      TextBoxPage.emailField.type("random@email@xxx.com");
      //Click submit button
      TextBoxPage.submitButton.click();
      //Validate that the email field has red bar
      TextBoxPage.fieldError.should("be.visible");
      TextBoxPage.emailField.should("have.class", "field-error");
    })
  });

  context("Checkbox scenatios", () => {
    beforeEach(() => {
      cy.visit("/checkbox");
    });

    it("Check values - Notes, Angular, Private, Excel File.doc", () => {
      //Click Expand(plus) button
      CheckBoxPage.expandButton.click();
      //Select values - Notes, Angular, Private, Excel File.doc
      CheckBoxPage.checkboxTitles.contains('Notes').click();
      CheckBoxPage.checkboxTitles.contains('Angular').click();
      CheckBoxPage.checkboxTitles.contains('Private').click();
      CheckBoxPage.checkboxTitles.contains('Excel File.doc').click();
      //Validate that info line contains the checked values
      //notes
      //angular
      //private
      //excelFile
      CheckBoxPage.textSuccess.should("contain.text", "notes");
      CheckBoxPage.textSuccess.should("contain.text", "angular");
      CheckBoxPage.textSuccess.should("contain.text", "private");
      CheckBoxPage.textSuccess.should("contain.text", "excelFile");
    })

    it("Check value - Office", () => {
      //Click Expand(plus) button
      CheckBoxPage.expandButton.click();
      //Select values - Office
      CheckBoxPage.checkboxTitles.contains('Office').click();
      //Validate that info line contains the checked values
      // office public private classified general
      CheckBoxPage.textSuccess.should("contain.text", "office");
      CheckBoxPage.textSuccess.should("contain.text", "public");
      CheckBoxPage.textSuccess.should("contain.text", "private");
      CheckBoxPage.textSuccess.should("contain.text", "classified");
      CheckBoxPage.textSuccess.should("contain.text", "general");
    })
  })

  context("Radio buttons scenatios", () => {
    beforeEach(() => {
      cy.visit("/radio-button");
    });

    it("Click radio buttons", () => {
      //Click Yes button
      RadioButtonPage.yesRaddioButton.click({ force: true });
      //Validate that yes button is clicked
      RadioButtonPage.textSuccess.should("have.text", "Yes");
      //Click Impressive button
      RadioButtonPage.impressiveRaddioButton.click({ force: true });
      //Validate that impressive button is clicked
      RadioButtonPage.textSuccess.should("have.text", "Impressive");
      //Validate that no button is unclickable/disabled
      RadioButtonPage.noRaddioButton.should("have.class", "disabled");
      RadioButtonPage.noRaddioButton.should("be.disabled");
    })
  })

  context("Buttons scenatios", () => {
    beforeEach(() => {
      cy.visit("/buttons");
    });

    it.only("Button clicking", () => {
      //Click Double click me button
      cy.get("#doubleClickBtn").dblclick();
      //Validate the double click message
      cy.get("#doubleClickMessage").should("have.text", "You have done a double click");
      //Click Right click me
      cy.get("#rightClickBtn").rightclick();
      //Validate the right click message rightClickMessage
      cy.get("#rightClickMessage").should("have.text", "You have done a right click");
      //Click Dynamic button
      //cy.get(".btn-primary").eq(2).click();
      cy.get(".btn-primary").contains(/^Click Me$/).click();
      //Validate the Dynamic click message
      cy.get("#dynamicClickMessage").should("have.text", "You have done a dynamic click");
    })
  })
});