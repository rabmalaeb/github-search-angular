import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import {map} from 'rxjs/operators';
import { HeaderOptions, SearchRequest, SearchResponse } from '../models/general';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private httpService: HttpService
  ) { }

  private apiUrl = 'https://api.github.com/search/';

  searchRepositories(searchRequest: SearchRequest): Observable<SearchResponse> {
    const url = `${this.apiUrl}repositories`;
    return this.httpService.request(url, searchRequest).pipe(map(({items, total_count}) => {
      const response = new SearchResponse();
      response.count = total_count;
      response.items = items;
      return response;
    }));
  }

  searchUsers(searchRequest: SearchRequest) {
    const url = `${this.apiUrl}users`;
    return this.httpService.request(url, searchRequest).pipe(map(({ items, total_count }) => {
      const response = new SearchResponse();
      response.count = total_count;
      response.items = items;
      return response;
    }));
  }

  searchCommits(searchRequest: SearchRequest) {
    const url = `${this.apiUrl}commits`;
    const headerOptions: Array<HeaderOptions> = [];
    headerOptions.push(new HeaderOptions('Accept', 'application/vnd.github.cloak-preview'));
    return this.httpService.request(url, searchRequest, headerOptions);
  }

  searchCode(searchRequest: SearchRequest) {
    const url = `${this.apiUrl}code`;
    return this.httpService.request(url, searchRequest).pipe(map(({ items, total_count }) => {
      const response = new SearchResponse();
      response.count = total_count;
      response.items = items;
      return response;
    }));
  }

  searchIssues(searchRequest: SearchRequest) {
    const url = `${this.apiUrl}issues`;
    return this.httpService.request(url, searchRequest);
  }

  searchTopics(searchRequest: SearchRequest) {
    const url = `${this.apiUrl}topics`;
    const headerOptions: Array<HeaderOptions> = [];
    headerOptions.push(new HeaderOptions('Accept', 'application/vnd.github.mercy-preview+json'));
    return this.httpService.request(url, searchRequest, headerOptions);
  }
}
