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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent,
    ResultsComponent,
    RepositoryItemComponent,
    UserItemComponent,
    CodeItemComponent
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
