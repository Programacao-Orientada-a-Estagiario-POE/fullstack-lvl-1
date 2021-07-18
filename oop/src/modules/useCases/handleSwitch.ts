import { log } from '../../utils';
import { actionBook } from '../books/ActionBook';
import Book from '../books/Book';
import { dystopiaBook } from '../books/DystopiaBook';
import { horrorBook } from '../books/HorrorBook';

enum GENRES {
  HORROR = 'HORROR',
  DYSTOPIA = 'DYSTOPIA',
  ACTION = 'ACTION',
}

const GenresClasses = {
  [GENRES.HORROR]: horrorBook,
  [GENRES.DYSTOPIA]: dystopiaBook,
  [GENRES.ACTION]: actionBook,
};

let map = new Map<string, Book>();
Object.values(GENRES).forEach((key) => {
  map.set(key, GenresClasses[key]);
});

// log(map);

class HandleSwitch {
  static execute(genre: string) {
    const quantityPages = map.get(genre)?.quantityPages;
    log(quantityPages);
    // static execute(genre: string) {
    //   switch (genre) {
    //     // case GENRE.DYSTOPIA:
    //     //   const dystopiaBook = new DystopiaBook();
    //     //   log(dystopiaBook.getGenre());
    //     //   break;
    //     // case GENRE.HORROR:
    //     //   const horrorBook = new HorrorBook();
    //     //   log(horrorBook.getGenre());
    //     //   break;
    //     default:
    //       log('DEFAULT');
    //       break;
    // }
  }
}

export default HandleSwitch;
