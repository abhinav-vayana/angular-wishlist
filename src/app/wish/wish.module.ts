import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishItemComponent } from './wish-item/wish-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishItemComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule, HttpClientModule],
  exports: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishItemComponent,
  ],
})
export class WishModule {}
