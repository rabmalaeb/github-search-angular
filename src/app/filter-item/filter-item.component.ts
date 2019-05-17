import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterItem } from '../models/general';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {

  @Input() filter: FilterItem;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.clicked.emit();
  }
}
