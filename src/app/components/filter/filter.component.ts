import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Output() onFilter = new EventEmitter();

  onChangeFilter(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.onFilter.emit(selectElement.value);
  }
}
