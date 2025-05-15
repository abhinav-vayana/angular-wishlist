import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../models/wishItem';

@Component({
  selector: 'add-wish-form',
  standalone: false,
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css',
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();
  newWishText = '';

  addWishItem() {
    if (this.newWishText.trim().length > 0) {
      this.addWish.emit(new WishItem(this.newWishText));
      this.newWishText = '';
    }
  }
}
