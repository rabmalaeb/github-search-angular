import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.scss']
})
export class IssueItemComponent implements OnInit {

  @Input() issue: {};

  constructor() { }

  ngOnInit() {
  }

}
