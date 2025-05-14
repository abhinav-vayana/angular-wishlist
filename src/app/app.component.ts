import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import events from './../shared/services/EventServices';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {
    events.listen('removeWish', (wish: any) => {
      //remove wish from items
      let idx = this.items.indexOf(wish);
      this.items.splice(idx, 1);
    });
  }
  items: WishItem[] = [];

  listFilter: string = '0';

  get visibleItems(): WishItem[] {
    const value = this.listFilter;
    if (value === '0') return this.items;
    if (value === '1') return this.items.filter((item) => !item.isComplete);
    return this.items.filter((item) => item.isComplete);
  }
}
