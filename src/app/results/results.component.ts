import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchRequest, FilterItem, Filter, PaginatorEvent } from '../models/general';
import { GithubService } from '../services/github.service';
import Repository from '../models/repositrory';
import { User } from '../models/user';
import { filter } from 'rxjs/operators';
import { Commit } from '../models/commit';
import Issue from '../models/issue';
import { Topic } from '../models/topic';

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
  topics: Topic[] = [];
  commits: Commit[] = [];
  issues: Issue[] = [];

  count = 0;
  currentPage = 1;
  isLoading = false;
  filterType: Filter = Filter.Repositories;

  filterList = [
    new FilterItem(Filter.Repositories, 'searchRepositories'),
    // new FilterItem(Filter.Code, 'searchCode'),
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
      this.searchRequest.page = 1;
      this.searchAllFilters();
    });
  }

  searchAllFilters() {
    this.filterList.forEach(filterItem => {
      this[filterItem.filterFunction]();
    });
    this.filterType = Filter.Repositories;
  }

  searchRepositories() {
    this.isLoading = true;
    this.githubService.searchRepositories(this.searchRequest).subscribe(response => {
      this.isLoading = false;
      this.count = response.count;
      this.setCount(Filter.Repositories, response.count);
      this.repositories = response.items as Repository[];

    });
  }

  searchUsers() {
    this.githubService.searchUsers(this.searchRequest).subscribe(response => {
      this.count = response.count;
      this.users = response.items as User[];
      this.setCount(Filter.Users, response.count);
      console.log('user response is ', response);
    });
  }

  searchCommits() {
    this.githubService.searchCommits(this.searchRequest).subscribe(response => {
      console.log('commits response is ', response);
      this.count = response.count;
      this.commits = response.items as Commit[];
      this.setCount(Filter.Commits, response.count);
      console.log('user response is ', response);
    });
  }

  searchIssues() {
    this.githubService.searchIssues(this.searchRequest).subscribe(response => {
      this.count = response.count;
      this.issues = response.items as Issue[];
      this.setCount(Filter.Issues, response.count);
      console.log('user response is ', response);
    });
  }

  searchTopics() {
    this.githubService.searchTopics(this.searchRequest).subscribe(response => {
      this.count = response.count;
      this.topics = response.items as Topic[];
      this.setCount(Filter.Topics, response.count);
      console.log('user response is ', response);
    });
  }

  searchCode() {
    this.githubService.searchCode(this.searchRequest).subscribe(response => {
      this.count = response.count;
      this.users = response.items as User[];
      this.setCount(Filter.Code, response.count);
      console.log('user response is ', response);
    });
  }

  searchBy(filterName: Filter) {
    if (this.filterType !== filterName) {
      this.resetPaginator();
    }
    const filterItem = this.filterList.find(item => item.name === filterName);
    this.filterType = filterName;
    this[filterItem.filterFunction]();
  }

  setCount(filterType: Filter, count: number) {
    this.filterList.forEach(item => {
      if (item.name === filterType) {
        item.count = count;
      }
    });
  }

  getNextResults(paginatorEvent: PaginatorEvent) {
    this.searchRequest.page = paginatorEvent.pageIndex;
    this.currentPage = paginatorEvent.pageIndex;
    this.searchBy(this.filterType);
  }

  resetPaginator() {
    this.count = 0;
    this.currentPage = 1;

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
