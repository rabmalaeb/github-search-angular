import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-item',
  templateUrl: './code-item.component.html',
  styleUrls: ['./code-item.component.scss']
})
export class CodeItemComponent implements OnInit {

  @Input() code: {};

  constructor() { }

  ngOnInit() {
  }

}
