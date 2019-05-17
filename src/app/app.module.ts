import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ResultsComponent } from './results/results.component';
import { RepositoryItemComponent } from './repository-item/repository-item.component';
import { MomentModule } from 'ngx-moment';
import { UserItemComponent } from './user-item/user-item.component';
import { CodeItemComponent } from './code-item/code-item.component';
import { CommitItemComponent } from './commit-item/commit-item.component';
import { IssueItemComponent } from './issue-item/issue-item.component';
import { TopicItemComponent } from './topic-item/topic-item.component';
import { LimitTextPipe } from './pipes/limit-text.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { NumberIndicatorPipe } from './pipes/number-indicator.pipe';
import { NumberPipe } from './pipes/number.pipe';
import { HomeComponent } from './home/home.component';
import { RepeatPipe } from './pipes/repeat.pipe';
import { MaskItemComponent } from './mask-item/mask-item.component';
import { FilterItemComponent } from './filter-item/filter-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent,
    ResultsComponent,
    RepositoryItemComponent,
    UserItemComponent,
    CodeItemComponent,
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
