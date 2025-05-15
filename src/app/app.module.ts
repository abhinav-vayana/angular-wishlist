import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { CommonModule } from '@angular/common';
import { WishItemComponent } from './wish-item/wish-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishItemComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
