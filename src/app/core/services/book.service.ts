import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';

@Injectable({
    providedIn: "root"
})

export class BookService {
    private books: Book[] = [
        {
            id: 1,
            title: "El Principito",
            author: "Antoine de Saint-Exupéry",
            genre: "Fábula",
            description: "La historia de un pequeño príncipe proveniente de un pequeño asteroide..."
        },
        {
            id: 2,
            title: 'Cien años de soledad',
            author: 'Gabriel García Márquez',
            genre: 'Realismo mágico',
            description: 'La saga de la familia Buendía en el pueblo ficticio de Macondo...'
        }
    ];

    getAllBooks(): Book[] {
        return this.books;
    };

    getBookById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

};