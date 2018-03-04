import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostService } from './posts/post.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ViewPostDetailsComponent } from './posts/view-post-details/view-post-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    HomeComponent,
    ViewPostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
