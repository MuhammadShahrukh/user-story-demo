import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { ViewPostDetailsComponent } from './posts/view-post-details/view-post-details.component';

const routes: Routes = [
    { path : 'home' , component : HomeComponent },
    { path : 'posts' , component : PostsListComponent },
    { path : 'posts/:id' , component : ViewPostDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
