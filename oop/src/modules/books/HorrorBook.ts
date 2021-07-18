import Book from './Book';

class HorrorBook extends Book {
  constructor() {
    super('Horror', 25);
  }
}
const horrorBook = new HorrorBook();

export { horrorBook };
