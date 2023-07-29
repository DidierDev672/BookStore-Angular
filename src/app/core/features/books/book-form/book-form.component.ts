import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/model/book.model';
import { BookService } from 'src/app/core/services/book.service';
import { NotificationService } from '../../shared/ services/notification.service';

@Component({
    selector: "app-book-form",
    templateUrl: "./book-form.component.html",
    styleUrls: ["./book-form.component.css"]
})

export class BookFormComponent implements OnInit {
    book: Book = {
        title: '',
        author: '',
        genre: '',
        description: ''
      };

      constructor(private bookService: BookService, private notificationService: NotificationService) { }

      ngOnInit(): void {
    }

    onSubmit(): void {
        if(this.book.title && this.book.author && this.book.genre && this.book.description){
            this.bookService.addBook(this.book);

            this.book = {
                title: '',
                author: '',
                genre: '',
                description: ''
              };
        }else {
            alert('Por favor, complete todos los campos del formulario.');
        }
        this.notificationService.showSuccess('Libro guardado exitosamente.');
        this.notificationService.showError('Ha ocurrido un error al guardar el libro.');
        this.notificationService.showWarning('El libro tiene campos vacíos.');
        this.notificationService.showInfo('Información adicional sobre el libro.');
    }
};