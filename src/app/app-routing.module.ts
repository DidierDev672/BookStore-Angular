import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './core/features/books/book-list/book-list.component';
import { BookDetailComponent } from './core/features/books/book-detail/book-detail.component';
import { BookFormComponent } from './core/features/books/book-form/book-form.component';
import { About } from './core/features/about/about.component';


const routes: Routes = [
  { path: "", redirectTo: "/books", pathMatch: "full" },
  {path: "books", component: BookListComponent},
  {path: "add-book", component: BookFormComponent},
  {path: "books/:id", component: BookDetailComponent},
  { path: "about", component: About }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
