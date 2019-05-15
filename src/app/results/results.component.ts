import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchRequest } from '../models/general';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) { }

  searchRequest: SearchRequest;

  repositories = null;
  count = 0;
  isLoading = false;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchRequest = new SearchRequest();
      this.searchRequest.q = params.q;
      this.searchRepositories();
    });
  }

  searchRepositories() {
    this.isLoading = true;
    this.githubService.searchRepositories(this.searchRequest).subscribe(({total_count, items}) => {
      this.isLoading = false;
      this.count = total_count;
      this.repositories = items;
    });
  }

}
