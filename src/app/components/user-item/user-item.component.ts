import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User, UserDetails } from '../../models/user';
import { HttpService } from '../../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit, OnDestroy {
  @Input() user: User;
  userDetails: UserDetails;
  isLoading = false;
  subscriptionList$: Array<Subscription> = [];

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.getUserInfo();
  }

  /**
   * get the user info from the url in the user response
   */
  getUserInfo() {
    this.isLoading = true;
    this.subscriptionList$.push(
      this.http.request(this.user.url).subscribe(response => {
        this.isLoading = false;
        this.userDetails = response as UserDetails;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach($sub => {
      if ($sub) {
        $sub.unsubscribe();
      }
    });
  }
}
