import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from './../../shared/services/EventServices';

@Component({
  selector: 'wish-item',
  standalone: false,
  templateUrl: './wish-item.component.html',
  styleUrl: './wish-item.component.css',
})
export class WishItemComponent {
  @Input() wish!: WishItem;
  constructor(private events: EventService) {}

  toggle(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
  get cssDecorator() {
    return { 'strikeout text-muted': this.wish.isComplete };
  }
  removeWish() {
    //removes the wish
    this.events.emit('removeWish', this.wish);
  }
}
