import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wish-filter',
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent {
  listFilter: any = '0';
  @Output() filter = new EventEmitter<any>();

  changeFilter(value: any) {
    this.filter.emit(value);
  }
}
