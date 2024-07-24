import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    FilterComponent,
    TodoComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
