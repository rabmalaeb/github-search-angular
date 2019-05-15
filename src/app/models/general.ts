export class HeaderOptions {
  constructor(public name: string, public value: string) {}
}

export class SearchRequest {
  public q: string;
  public sort: SortBy;
  public order: OrderBy;
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
