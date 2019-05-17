import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginatorEvent } from 'src/app/models/general';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() length = 1;
  @Input() pageSize = 10;
  @Input() currentPage = 1;
  @Output() page: EventEmitter<PaginatorEvent> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goToPreviousPage() {
    if (!this.previousLimitReached) {
      this.currentPage--;
      this.page.emit(this.getPaginatorEvent());
    }
  }

  goToNextPage() {
    if (!this.nextLimitReached) {
      this.currentPage++;
      this.page.emit(this.getPaginatorEvent());
    }
  }

  get numberOfPages() {
    return Math.ceil(this.length / this.pageSize);
  }

  /**
   * check if the user is currently on the first page
   */
  get previousLimitReached() {
    if (this.currentPage === 1) {
      return true;
    }
    return false;
  }

  /**
   * Check if the page limit is reached
   */
  get nextLimitReached() {
    if (this.currentPage + 1 === this.numberOfPages) {
      return true;
    }
    return false;
  }

  getPaginatorEvent(): PaginatorEvent {
    const paginatorEvent = new PaginatorEvent();
    paginatorEvent.length = this.length;
    paginatorEvent.pageIndex = this.currentPage;
    paginatorEvent.pageSize = this.pageSize;
    return paginatorEvent;
  }

}
