import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable()
export class PostService {

    posts : Post[] = [
        {
            id: 1,
            title: 'Geo News',
            body: 'something is going on in the city',
            userId: 1
        },
        {
            id: 2,
            title: 'Express News',
            body: 'something is going on in the city',
            userId: 1
        },
        {
            id: 3,
            title: 'Express News',
            body: 'something is going on in the city',
            userId: 4
        }
    ]

    constructor() {

    }

    public fetchPosts(){
        return this.posts;
    }

}
