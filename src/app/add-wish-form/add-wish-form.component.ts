import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css',
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  newWishText = '';

  addWishItem() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
