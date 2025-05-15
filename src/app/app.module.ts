import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { WishModule } from './wish/wish.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, WishModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
