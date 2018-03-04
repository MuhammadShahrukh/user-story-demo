import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../post.service';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

    posts: Post[] = [];
    settings: any = {
        actions : false,
        columns: {
            id: {
                title: 'ID',
                width : '15%',
                sort : true
                
            },
            title: {
                title: 'title',
                filter: true,
                width : '50%'
            },
           
        },
       
    };

    constructor(private postService: PostService, private router:Router) {

    }

    ngOnInit() {
        this.fetchPosts();
    }

    fetchPosts() {
        this.postService.fetchPosts()
            .subscribe(posts => this.posts = posts);
    }

    showPostDetail(clickedRow){
        this.router.navigateByUrl('/posts/'+clickedRow.data.id);
    }

}
