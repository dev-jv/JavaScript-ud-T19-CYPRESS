/// <reference types="cypress"/>

describe('Llena los campos para editar una cita', () => {
    it('campos nueva cita', () => {

        cy.visit('/index.html');

        cy.get('[data-cy=mascota-input]')
            .type('Hook');

        cy.get('[data-cy=propietario-input]')
            .type('Dean');
        
        cy.get('[data-cy=telefono-input]')
            .type('933174564');

        cy.get('[data-cy=fecha-input]')
            .type('2020-11-24');
        
        cy.get('[data-cy=hora-input]')
            .type('20:41');

        cy.get('[data-cy=sintomas-textarea]')
            .type('Solo duerme');
        
        cy.get('[data-cy=submit-cita]')
            .click();

        cy.get('[data-cy="citas-heading"]') //Luego de un click
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');
    });

    it('Edita la cita', () => {
        cy.get('[data-cy=btn-editar]')
            .click()

        cy.get('[data-cy=mascota-input]')
            .clear()
            .type('Kiu');

        cy.get('[data-cy=submit-cita]')
            .click();

        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente');

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');
    })
});

