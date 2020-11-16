///<reference types="cypress"/>

describe('valida el formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () =>{
        
        cy.visit('/index.html')

        cy.get('[data-cy="formulario"]')
            .submit();

        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios');

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-danger');
    });
});