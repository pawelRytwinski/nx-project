export const getTodos = () => cy.get('li.todo');
export const getAddTodoButton = () => cy.get('button#add-todo');
export const getGreeting = () => cy.get('h1')