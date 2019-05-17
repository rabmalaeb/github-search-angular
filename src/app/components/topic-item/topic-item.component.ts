import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../models/topic';

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.scss']
})
export class TopicItemComponent implements OnInit {

  @Input() topic: Topic;

  constructor() { }

  ngOnInit() {
  }

}
