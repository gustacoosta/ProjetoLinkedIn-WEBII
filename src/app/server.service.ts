import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',  // Certifique-se de que está como 'root'
})
export class ServerService {
  private jsonURL = 'assets/curriculo/dados.json';
  private postsLoaded = false;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {  
    return this.http.get(this.jsonURL); 
  }

  

  savePosts(posts: Post[]): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }  

  getPosts(): Observable<Post[]> {
    const jsonPosts = require('../assets/feed/post.json').posts; // Carrega posts do JSON
  
    if (this.isLocalStorageAvailable()) {
      const storedPosts = localStorage.getItem('posts');
      const localPosts = storedPosts ? JSON.parse(storedPosts) : [];
      // Combina JSON com localStorage
      return of([...jsonPosts, ...localPosts]); 
    }
  
    return of(jsonPosts); // Retorna apenas JSON se localStorage não estiver disponível
  }
  
  
  
  private isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }
  
}
