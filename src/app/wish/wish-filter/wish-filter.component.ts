import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  standalone: false,
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent {
  listFilter: any = '0';
  @Output() filter = new EventEmitter<any>();

  changeFilter(value: any) {
    this.filter.emit(value);
  }
}
