import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import {
  HeaderOptions,
  SearchRequest,
  SearchResponse,
} from '../models/general';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private httpService: HttpService) {}

  private apiUrl = 'https://api.github.com/search/';

  searchRepositories(searchRequest: SearchRequest): Observable<SearchResponse> {
    return this.getResults('repositories', searchRequest);
  }

  searchUsers(searchRequest: SearchRequest) {
    return this.getResults('users', searchRequest);
  }

  searchCommits(searchRequest: SearchRequest) {
    const headerOptions: Array<HeaderOptions> = [];
    headerOptions.push(
      new HeaderOptions('Accept', 'application/vnd.github.cloak-preview')
    );
    return this.getResults('commits', searchRequest, headerOptions);
  }

  searchCode(searchRequest: SearchRequest) {
    return this.getResults('code', searchRequest);
  }

  searchIssues(searchRequest: SearchRequest) {
    return this.getResults('issues', searchRequest);
  }

  searchTopics(searchRequest: SearchRequest) {
    const headerOptions: Array<HeaderOptions> = [];
    headerOptions.push(
      new HeaderOptions('Accept', 'application/vnd.github.mercy-preview+json')
    );
    return this.getResults('topics', searchRequest, headerOptions);
  }

  getResults(
    url: string,
    searchRequest: SearchRequest,
    headerOptions: Array<HeaderOptions> = null
  ) {
    const apiUrl = `${this.apiUrl}${url}`;
    return this.httpService.request(apiUrl, searchRequest, headerOptions).pipe(
      map(({ items, total_count }) => {
        const response = new SearchResponse();
        response.count = total_count;
        response.items = items;
        return response;
      })
    );
  }
}
