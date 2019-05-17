import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ResultsComponent } from './pages/results/results.component';
import { RepositoryItemComponent } from './components/repository-item/repository-item.component';
import { MomentModule } from 'ngx-moment';
import { UserItemComponent } from './components/user-item/user-item.component';
import { CommitItemComponent } from './components/commit-item/commit-item.component';
import { IssueItemComponent } from './components/issue-item/issue-item.component';
import { TopicItemComponent } from './components/topic-item/topic-item.component';
import { LimitTextPipe } from './pipes/limit-text.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { NumberIndicatorPipe } from './pipes/number-indicator.pipe';
import { NumberPipe } from './pipes/number.pipe';
import { HomeComponent } from './pages/home/home.component';
import { RepeatPipe } from './pipes/repeat.pipe';
import { MaskItemComponent } from './components/mask-item/mask-item.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent,
    ResultsComponent,
    RepositoryItemComponent,
    UserItemComponent,
    CommitItemComponent,
    IssueItemComponent,
    TopicItemComponent,
    LimitTextPipe,
    PaginatorComponent,
    NumberIndicatorPipe,
    NumberPipe,
    HomeComponent,
    RepeatPipe,
    MaskItemComponent,
    FilterItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
