import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

import { Book } from "../book";
import { BookService } from "../book.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"]
})
export class BooksComponent implements OnInit {
  categories = ["Computers", "Science", "Drama", "Fantasy", "Other"];

  addForm: FormGroup;

  selectedBook: Book;

  books: Book[];

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getBooks();
    this.addForm = this.formBuilder.group({
      bookTitle: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      bookAuthor: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      bookDate: [
        "",
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => (this.books = books));
  }

  add(title: string, author: string, date: string, img: string): void {
    title = title.trim();
    author = author.trim();
    date = date.trim();
    img = "../assets/book.jpg";

    if (!title || !author || !date || !img) {
      return;
    }

    this.bookService.getBooks().subscribe(books => {
      if (books.some(book => book.title === title)) {
        document.getElementById(
          "uniqueError"
        ).innerHTML = `<div class="alert alert-danger alert-dismissible fade in">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Error!</strong> Please insert unique book name.
      </div>`;
      } else {
        this.bookService
          .addBook({ title, author, date, img } as Book)
          .subscribe(book => {
            this.books.push(book);
            document.getElementById(
              "uniqueError"
            ).innerHTML = `<div class="alert alert-success alert-dismissible fade in">
          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <strong>Success!</strong> Book was added.
        </div>`;
          });
      }
    });
  }

  delete(book: Book): void {
    if (confirm('Delete this book?')) {
      this.books = this.books.filter(b => b !== book);
      this.bookService.deleteBook(book).subscribe();
      }
    }
}
