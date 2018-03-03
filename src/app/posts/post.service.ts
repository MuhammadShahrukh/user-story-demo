import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {

    fakeApi : string = 'https://jsonplaceholder.typicode.com/';
    
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

    constructor(private http : HttpClient) {

    }

    public fetchPosts() : Observable<Post[]>{
        return this.http.get<Post[]>(this.fakeApi+'posts')
    }

}
