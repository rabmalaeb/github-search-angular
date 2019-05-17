import { Component, OnInit, Input } from '@angular/core';
import { User, UserDetails } from '../../models/user';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;
  userDetails: UserDetails;
  isLoading = false;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  /**
   * get the user info from the url in the user response
   */
  getUserInfo() {
    this.isLoading = true;
    this.http.request(this.user.url).subscribe(response => {
      this.isLoading = false;
      this.userDetails = response as UserDetails;
    });
  }

}
