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

  /**
   * get the query param from the route and set it to searchItem
   */
  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.searchItem = param.q ? param.q : '';
    });
  }

  /**
   * navigate to results page with the search param as a query param
   */
  searchRepositories() {
    this.router.navigate(['/results'], {
      queryParams: { q: this.searchItem }
    });
  }

  /**
   * this is used to style the search input differently if the type is home
   */
  get isHome() {
    return this.type === 'home';
  }
}
