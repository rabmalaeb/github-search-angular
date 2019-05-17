import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterItem } from '../../models/general';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {

  @Input() filter: FilterItem;

  /**
   * emit whenever the filter item is clicked
   */
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * emit the clicked EventEmitter whenever the filterItem is clicked
   */
  search() {
    this.clicked.emit();
  }
}
