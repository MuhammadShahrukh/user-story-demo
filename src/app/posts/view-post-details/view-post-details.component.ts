import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
    selector: 'app-view-post-details',
    templateUrl: './view-post-details.component.html',
    styleUrls: ['./view-post-details.component.css']
})
export class ViewPostDetailsComponent implements OnInit {

    post: Post;

    constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.fetchPostDetails()
    }

    fetchPostDetails() {

        this.activatedRoute.params.subscribe((params: Params) => {
            let postId = params['id'];;
            this.postService.fetchPostDetail(postId)
            .subscribe(post => {
                console.log(post);
                this.post = post
            })
        });

        
    }

}
