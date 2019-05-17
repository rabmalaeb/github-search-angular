import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.scss']
})
export class TopicItemComponent implements OnInit {

  @Input() topic: {};

  constructor() { }

  ngOnInit() {
  }

}
