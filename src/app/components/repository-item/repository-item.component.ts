import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../../models/repositrory';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent implements OnInit {

  @Input() repository: Repository;

  constructor() { }

  ngOnInit() {
  }

}
