import { NumberValueAccessor } from '@angular/forms/src/directives';

export class HeaderOptions {
  constructor(public name: string, public value: string) {}
}

export class SearchRequest {
  public q: string;
  public sort: SortBy;
  public order: OrderBy;
  public page: number;
}

export enum SortBy {
  Start = 'stars',
  Forks = 'forks',
  HelpWanted = 'help-wanted - issues',
  BestMatch = 'best match'
}

export enum OrderBy {
  Asc = 'asc',
  Desc = 'desc'
}

export class SearchResponse {
  items: {};
  count: number;
}

export enum Filter {
  Repositories = 'Repositories',
  Code = 'Code',
  Commits = 'Commits',
  Issues = 'Issues',
  Packages = 'Packages',
  Marketplace = 'Marketplace',
  Topics = 'Topics',
  Wikis = 'Wikis',
  Users = 'Users'
}

export class FilterItem {
  constructor(public name: Filter, public filterFunction: string, public count: number = 0) {}
}

export class PaginatorEvent {
  pageIndex: number;
  pageSize: number;
  length: number;
  previousPageIndex: number;
}
