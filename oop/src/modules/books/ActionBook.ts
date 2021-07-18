import Book from './Book';

class ActionBook extends Book {
  constructor() {
    super('Action', 335);
  }
}
const actionBook = new ActionBook();

export { actionBook };
