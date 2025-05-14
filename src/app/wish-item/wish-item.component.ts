import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-item',
  imports: [FormsModule, CommonModule],
  templateUrl: './wish-item.component.html',
  styleUrl: './wish-item.component.css',
})
export class WishItemComponent {
  @Input() wish!: WishItem;
  toggle(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
