import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/core/model/book.model';
import { BookService } from 'src/app/core/services/book.service';

@Component({
    selector: "app-book-detail",
    templateUrl: "./book-detail.component.html",
    styleUrls: ["./book-detail.component.css"]
})

export class BookDetailComponent implements OnInit {
    book: Book | undefined;

    constructor(
        private route: ActivatedRoute,
        private bookService: BookService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const bookId = Number(params.get('id'));
            this.book = this.bookService.getBookById(bookId);
        });
    }
};