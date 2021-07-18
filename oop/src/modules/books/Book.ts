abstract class Book {
  private page: string;

  constructor(private genre: string, public quantityPages: number = 0) {
    this.page = 'Page to be read';
  }

  public readPage(page: number): string {
    return `${this.page}. Page number:${page}`;
  }

  public getGenre(): string {
    return this.genre;
  }
}

export default Book;
