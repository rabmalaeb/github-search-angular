import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchRequest, FilterItem, Filter } from '../models/general';
import { GithubService } from '../services/github.service';
import Repository from '../models/repositrory';
import { User } from '../models/user';

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
  users: User[] = [];
  codes: User[] = [];
  topics: User[] = [];
  commits: User[] = [];
  issues: User[] = [];

  count = 0;
  isLoading = false;
  filterType: Filter = Filter.Repositories;

  filterList = [
    new FilterItem(Filter.Repositories, 'searchRepositories'),
    new FilterItem(Filter.Code, 'searchCode'),
    new FilterItem(Filter.Commits, 'searchCommits'),
    new FilterItem(Filter.Issues, 'searchIssues'),
    // new FilterItem(Filter.Packages, 'searchRepositories'),
    // new FilterItem(Filter.Marketplace, 'searchRepositories'),
    new FilterItem(Filter.Topics, 'searchTopics'),
    // new FilterItem(Filter.Wikis, 'searchRepositories'),
    new FilterItem(Filter.Users, 'searchUsers')
  ];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchRequest = new SearchRequest();
      this.searchRequest.q = params.q;
      this.searchRepositories();
    });
  }

  searchRepositories() {
    this.filterType = Filter.Repositories;
    this.isLoading = true;
    this.githubService.searchRepositories(this.searchRequest).subscribe(response => {
      this.isLoading = false;
      this.count = response.count;
      this.repositories = response.items as Repository[];

    });
  }

  searchUsers() {
    this.filterType = Filter.Users;
    this.githubService.searchUsers(this.searchRequest).subscribe(response => {
      this.count = response.count;
      this.users = response.items as User[];
      console.log('user response is ', response);
    });
  }

  searchCommits() {
    this.githubService.searchCommits(this.searchRequest).subscribe(response => {
      this.count = response.count;
      this.users = response.items as User[];
      console.log('user response is ', response);
    });
  }

  searchIssues() {
    this.githubService.searchIssues(this.searchRequest).subscribe(response => {
      this.count = response.count;
      this.users = response.items as User[];
      console.log('user response is ', response);
    });
  }

  searchTopics() {
    this.githubService.searchTopics(this.searchRequest).subscribe(response => {
      this.count = response.count;
      this.users = response.items as User[];
      console.log('user response is ', response);
    });
  }

  searchCode() {
    this.githubService.searchCode(this.searchRequest).subscribe(response => {
      this.count = response.count;
      this.users = response.items as User[];
      console.log('user response is ', response);
    });
  }

  searchBy(filterName: Filter) {
    const filterItem = this.filterList.find(filter => filter.name === filterName);
    this[filterItem.filterFunction]();
  }

  get isRepositories() {
    return this.filterType === Filter.Repositories;
  }

  get isUser() {
    return this.filterType === Filter.Users;
  }

  get isCode() {
    return this.filterType === Filter.Code;
  }

  get isTopic() {
    return this.filterType === Filter.Topics;
  }

  get isCommit() {
    return this.filterType === Filter.Commits;
  }

  get isIssue() {
    return this.filterType === Filter.Issues;
  }
}
