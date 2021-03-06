import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  SearchRequest,
  FilterItem,
  Filter,
  PaginatorEvent,
  SearchResponse,
} from '../../models/general';
import { GithubService } from '../../services/github.service';
import { Repository } from '../../models/repositrory';
import { User } from '../../models/user';
import { Commit } from '../../models/commit';
import { Issue } from '../../models/issue';
import { Topic } from '../../models/topic';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  searchRequest: SearchRequest;
  subscriptionList$: Array<Subscription> = [];

  repositories: Repository[] = [];
  commits: Commit[] = [];
  issues: Issue[] = [];
  users: User[] = [];
  topics: Topic[] = [];
  currentPage = 1;
  isLoading = false;
  searchParam = '';

  /**
   * current filterType
   */
  filterType: Filter = Filter.Repositories;

  filterList = [
    new FilterItem(Filter.Repositories, 'searchRepositories', true),
    new FilterItem(Filter.Commits, 'searchCommits'),
    new FilterItem(Filter.Issues, 'searchIssues'),
    new FilterItem(Filter.Topics, 'searchTopics'),
    new FilterItem(Filter.Users, 'searchUsers'),
  ];

  /**
   * create an instance of SearchRequest to be used for all filters
   * call searchAllFilters
   */
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchRequest = new SearchRequest();
      this.searchRequest.q = params.q;
      this.searchParam = params.q;
      this.searchRequest.page = 1;
      this.searchAllFilters();
    });
  }

  /**
   * ca;; the filterFunction of all filter items in the filterList
   */
  searchAllFilters() {
    this.filterList.forEach(filterItem => {
      this[filterItem.filterFunction]();
    });
    this.filterType = Filter.Repositories;
  }

  /**
   * call the github service to search for repositories
   */
  searchRepositories() {
    this.isLoading = true;
    this.subscriptionList$.push(
      this.githubService.searchRepositories(this.searchRequest).subscribe(
        response => {
          this.doAfterResponse(Filter.Repositories, response);
          this.repositories = response.items as Repository[];
        },
        () => {
          this.doAfterError();
        }
      )
    );
  }

  /**
   * call the github service to search for users
   */
  searchUsers() {
    this.isLoading = true;
    this.subscriptionList$.push(
      this.githubService.searchUsers(this.searchRequest).subscribe(
        response => {
          this.doAfterResponse(Filter.Users, response);
          this.users = response.items as User[];
        },
        () => {
          this.doAfterError();
        }
      )
    );
  }

  /**
   * call the github service to search for commits
   */
  searchCommits() {
    this.isLoading = true;
    this.subscriptionList$.push(
      this.githubService.searchCommits(this.searchRequest).subscribe(
        response => {
          this.doAfterResponse(Filter.Commits, response);
          this.commits = response.items as Commit[];
        },
        () => {
          this.doAfterError();
        }
      )
    );
  }

  /**
   * call the github service to search for issues
   */
  searchIssues() {
    this.isLoading = true;
    this.subscriptionList$.push(
      this.githubService.searchIssues(this.searchRequest).subscribe(
        response => {
          this.doAfterResponse(Filter.Issues, response);
          this.issues = response.items as Issue[];
        },
        () => {
          this.doAfterError();
        }
      )
    );
  }

  /**
   * call the github service to search for topics
   */
  searchTopics() {
    this.isLoading = true;
    this.subscriptionList$.push(
      this.githubService.searchTopics(this.searchRequest).subscribe(
        response => {
          this.doAfterResponse(Filter.Topics, response);
          this.topics = response.items as Topic[];
        },
        () => {
          this.doAfterError();
        }
      )
    );
  }

  /**
   * call the github service to search for codes
   */
  searchCode() {
    this.isLoading = true;
    this.subscriptionList$.push(
      this.githubService.searchCode(this.searchRequest).subscribe(
        response => {
          this.doAfterResponse(Filter.Code, response);
          this.users = response.items as User[];
        },
        () => {
          this.doAfterError();
        }
      )
    );
  }

  doAfterResponse(filter: Filter, response: SearchResponse) {
    this.isLoading = false;
    this.setCount(filter, response.count);
  }

  doAfterError() {
    this.isLoading = false;
  }
  /**
   * call the filterFunction of the selected filter from the filterList
   * if the selected filter changed then reset the paginator values
   * @param filterName selected filter name
   */
  searchBy(filterName: Filter) {
    this.setSelectedFilter(filterName);
    if (this.filterType !== filterName) {
      this.resetPaginator();
    }
    const filterItem = this.filterList.find(item => item.name === filterName);
    this.filterType = filterName;
    this[filterItem.filterFunction]();
  }

  /**
   * set the count of the selected filter
   * @param filterType selected filter name
   * @param count the count to be set
   */
  setCount(filterType: Filter, count: number) {
    this.filterList.forEach(item => {
      if (item.name === filterType) {
        item.count = count;
      }
    });
  }

  /**
   * search again with the upadated page from the paginator
   * @param paginatorEvent the paginator event containing paginator info
   */
  getNextResults(paginatorEvent: PaginatorEvent) {
    this.searchRequest.page = paginatorEvent.pageIndex;
    this.currentPage = paginatorEvent.pageIndex;
    this.searchBy(this.filterType);
  }

  /**
   * reset the count and the current page
   */
  resetPaginator() {
    this.currentPage = 1;
  }

  /**
   * set the isSelected property of the selected filter to true
   * set the isSelected property of the rest to false
   * @param filterName the selected filter name
   */
  setSelectedFilter(filterName: string) {
    this.filterList.forEach(item => {
      item.isSelected = false;
      if (item.name === filterName) {
        item.isSelected = true;
      }
    });
  }

  get count() {
    let selectedCount = 0;
    this.filterList.forEach(filter => {
      if (filter.isSelected) {
        selectedCount = filter.count;
      }
    });
    return selectedCount;
  }

  get isRepositories() {
    return this.filterType === Filter.Repositories;
  }

  get isUser() {
    return this.filterType === Filter.Users;
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

  get hasNoResults() {
    if (!this.isLoading) {
      switch (this.filterType) {
        case Filter.Repositories:
          if (this.repositories.length === 0) {
            return true;
          }
          break;
        case Filter.Commits:
          if (this.commits.length === 0) {
            return true;
          }
          break;
        case Filter.Issues:
          if (this.issues.length === 0) {
            return true;
          }
          break;
        case Filter.Topics:
          if (this.topics.length === 0) {
            return true;
          }
          break;
        case Filter.Users:
          if (this.users.length === 0) {
            return true;
          }
          break;
        case Filter.Issues:
          if (this.issues.length === 0) {
            return true;
          }
          break;
        default:
          return false;
      }
    }
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach($sub => {
      if ($sub) {
        $sub.unsubscribe();
      }
    });
  }
}
