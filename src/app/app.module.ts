import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/features/shared/components/header/header.component';
import { LayoutDefaultComponent } from './core/features/shared/components/layouts/default-layout/default-layout.component';
import { BookListComponent } from './core/features/books/book-list/book-list.component';
import { BookDetailComponent } from './core/features/books/book-detail/book-detail.component';
import { BookFormComponent } from './core/features/books/book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutDefaultComponent,
    BookListComponent,
    BookDetailComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
