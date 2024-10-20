import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private jsonURL = 'assets/curriculo/dados.json';
  private feedjsonURL = 'assets/feed/dados.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {  
    return this.http.get<any[]>(this.jsonURL); 
  }

  getPosts(): Observable<any[]> {  
    return this.http.get<any[]>(this.feedjsonURL);  
  }
}
