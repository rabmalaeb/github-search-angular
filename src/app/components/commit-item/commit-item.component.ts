import { Component, OnInit, Input } from '@angular/core';
import { Commit } from '../../models/commit';

@Component({
  selector: 'app-commit-item',
  templateUrl: './commit-item.component.html',
  styleUrls: ['./commit-item.component.scss']
})
export class CommitItemComponent implements OnInit {

  @Input() commit: Commit;

  constructor() { }

  ngOnInit() {
  }

}
