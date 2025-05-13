import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, WishListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [];
  title = 'wishlist';
  newWishText = '';
  listFilter: string = '0';
  addWishItem() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
  get visibleItems(): WishItem[] {
    let value = this.listFilter;
    if (value === '0') {
      return this.items;
    } else if (value === '1') {
      return this.items.filter((item) => item.isComplete === false);
    } else {
      return this.items.filter((item) => item.isComplete === true);
    }
  }
}
