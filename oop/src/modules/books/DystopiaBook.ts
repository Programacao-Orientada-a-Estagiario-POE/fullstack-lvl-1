import Book from './Book';

class DystopiaBook extends Book {
  constructor() {
    super('Dystopia', 35);
  }
}
const dystopiaBook = new DystopiaBook();

export { dystopiaBook };
