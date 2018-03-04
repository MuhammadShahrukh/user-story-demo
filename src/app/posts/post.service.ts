import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {

    fakeApi : string = 'https://jsonplaceholder.typicode.com/';

    constructor(private http : HttpClient) {

    }

    public fetchPosts() : Observable<Post[]>{
        return this.http.get<Post[]>(this.fakeApi+'posts')
    }

    public fetchPostDetail(postId) : Observable<Post>{
        return this.http.get<Post>(this.fakeApi+'posts/'+postId)
    }

}
