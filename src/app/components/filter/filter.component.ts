import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Output() onFilter = new EventEmitter();
  @Input() selectedFilter: string = 'all';

  onChangeFilter() {
    this.onFilter.emit(this.selectedFilter);
  }
}
