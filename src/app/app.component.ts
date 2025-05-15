import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { EventService } from './../shared/services/EventServices';
import { WishService } from './wish.service';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private events: EventService, private wishService: WishService) {
    this.events.listen('removeWish', (wish: any) => {
      //remove wish from items
      let idx = this.items.indexOf(wish);
      this.items.splice(idx, 1);
    });
  }
  items!: WishItem[];
  ngOnInit(): void {
    this.wishService.getWisher().subscribe((data: any) => {
      this.items = data;
    });
  }
  listFilter: string = '0';

  get visibleItems(): WishItem[] {
    const value = this.listFilter;
    if (value === '0') return this.items;
    if (value === '1') return this.items.filter((item) => !item.isComplete);
    return this.items.filter((item) => item.isComplete);
  }
}
