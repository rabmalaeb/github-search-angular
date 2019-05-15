import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HeaderOptions, SearchRequest } from '../models/general';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpService: HttpService) { }

  private apiUrl = 'https://api.github.com/search/';

  searchRepositories(searchRequest: SearchRequest) {
    const url = `${this.apiUrl}repositories`;
    return this.httpService.request(url, searchRequest);
  }

  searchUsers(searchRequest: SearchRequest) {
    const url = `${this.apiUrl}users`;
    return this.httpService.request(url, searchRequest);
  }

  searchCommits(searchRequest: SearchRequest) {
    const url = `${this.apiUrl}commits`;
    const headerOptions: Array<HeaderOptions> = [];
    headerOptions.push(new HeaderOptions('Accept', 'application/vnd.github.cloak-preview'));
    return this.httpService.request(url, searchRequest, headerOptions);
  }

  searchCode(searchRequest: SearchRequest) {
    const url = `${this.apiUrl}code`;
    return this.httpService.request(url, searchRequest);
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
