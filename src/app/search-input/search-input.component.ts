import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchItem = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchRepositories() {
    this.router.navigate(['/results'], {
      queryParams: { q: this.searchItem }
    });
  }

}
