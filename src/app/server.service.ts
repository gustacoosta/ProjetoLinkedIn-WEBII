import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root', 
})
export class ServerService {
  private jsonURL = 'assets/curriculo/dados.json';
  private postsLoaded = false;
  private postsSubject = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {  
    return this.http.get(this.jsonURL); 
  }

  savePosts(posts: Post[]): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('posts', JSON.stringify(posts));
      this.postsSubject.next(posts); // Emitir posts atualizados
    }
  }  

  getPosts(): Observable<Post[]> {
    const jsonPosts = require('../assets/feed/post.json').posts;

    if (this.isLocalStorageAvailable()) {
      const storedPosts = localStorage.getItem('posts');
      const localPosts = storedPosts ? JSON.parse(storedPosts) : [];
      const allPosts = [...jsonPosts, ...localPosts];
      this.postsSubject.next(allPosts);
      return of(allPosts); 
    }
  
    return of(jsonPosts); 
  }

  getPostsObservable(): Observable<Post[]> {
    return this.postsSubject.asObservable(); 
  }

  private isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }
}
