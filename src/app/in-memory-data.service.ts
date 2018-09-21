import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {
        id: 0,
        author: "Asaf Ventura",
        date: "1990-01-31",
        title: "The Angular Guide",
        img: "../assets/angular.jpg"
      },
      {
        id: 1,
        author: "Mark Ryan",
        date: "2000-01-31",
        title: "Calculus For Dummies",
        img: "../assets/calculus.jpg"
      },
      {
        id: 2,
        author: "Dan Brown",
        date: "2011-03-21",
        title: "The Da Vinci Code",
        img: "../assets/davinci.jpg"
      },
      {
        id: 3,
        author: "George R. R. Martin",
        date: "2009-05-15",
        title: "A Song Of Ice And Fire",
        img: "../assets/iceandfire.jpg"
      },
      {
        id: 4,
        author: "James, E. L.",
        date: "2015-05-01",
        title: "Fifty Shades of Grey",
        img: "../assets/50shades.jpg"
      },
      {
        id: 5,
        author: "J. R. R. Tolkien",
        date: "1937-09-21",
        title: "The Hobbit",
        img: "../assets/thehobbit.jpg"
      }
    ];
    return { books };
  }
}
