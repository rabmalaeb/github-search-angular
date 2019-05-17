import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchItem = '';

  @Input() type = 'nav';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.searchItem = param.q ? param.q : '';
    });
  }

  searchRepositories() {
    this.router.navigate(['/results'], {
      queryParams: { q: this.searchItem }
    });
  }

  get isHome() {
    return this.type === 'home';
  }
}
