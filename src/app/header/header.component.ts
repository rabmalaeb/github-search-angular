import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.searchRepositories('rabih').subscribe(result => {
      console.log('results is ', result);
    });
    this.githubService.searchUsers('rabih').subscribe(result => {
      console.log('results is ', result);
    });
    this.githubService.searchCommits('rabih').subscribe(result => {
      console.log('results is ', result);
    });
    this.githubService.searchCode('rabih').subscribe(result => {
      console.log('results is ', result);
    });
    this.githubService.searchIssues('rabih').subscribe(result => {
      console.log('results is ', result);
    });
    this.githubService.searchTopics('rabih').subscribe(result => {
      console.log('results is ', result);
    });
  }

}
