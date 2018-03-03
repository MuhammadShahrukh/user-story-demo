import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

    posts : Post[]

    constructor( private postService:PostService ) {

    }

    ngOnInit() {
        this.fetchPosts();
    }

    fetchPosts(){
       this.postService.fetchPosts()
       .subscribe(posts => this.posts=posts);
       
    }

}
