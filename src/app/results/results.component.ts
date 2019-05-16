import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchRequest } from '../models/general';
import { GithubService } from '../services/github.service';
import Repository from '../models/repositrory';

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

  repositories: Repository[] = [];
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
    this.githubService.searchRepositories(this.searchRequest).subscribe(response => {
      this.isLoading = false;
      this.count = response.count;
      this.repositories = response.items as Repository[];
      console.log('respo sads d', this.repositories);

    });
  }

}
