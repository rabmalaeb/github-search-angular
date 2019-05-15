import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HeaderOptions } from '../models/general';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpService: HttpService) { }

  private apiUrl = 'https://api.github.com/search/';

  searchRepositories(name: string) {
    const url = `${this.apiUrl}repositories`;
    return this.httpService.request(url, {q: name});
  }

  searchUsers(name: string) {
    const url = `${this.apiUrl}users`;
    return this.httpService.request(url, {q: name});
  }

  searchCommits(name: string) {
    const url = `${this.apiUrl}commits`;
    const headerOptions: Array<HeaderOptions> = [];
    headerOptions.push(new HeaderOptions('Accept', 'application/vnd.github.cloak-preview'));
    return this.httpService.request(url, {q: name}, headerOptions);
  }

  searchCode(name: string) {
    const url = `${this.apiUrl}code`;
    return this.httpService.request(url, {q: name});
  }

  searchIssues(name: string) {
    const url = `${this.apiUrl}issues`;
    return this.httpService.request(url, {q: name});
  }

  searchTopics(name: string) {
    const url = `${this.apiUrl}topics`;
    const headerOptions: Array<HeaderOptions> = [];
    headerOptions.push(new HeaderOptions('Accept', 'application/vnd.github.mercy-preview+json'));
    return this.httpService.request(url, {q: name}, headerOptions);
  }
}
