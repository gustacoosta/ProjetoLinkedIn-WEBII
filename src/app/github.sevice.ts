import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../config/environment'; 

// export const environment = {
//   production: false,
//   githubToken: ''
// };


interface GitHubRepo {
  name: string;
  html_url: string;
  stargazers_count: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly BASE_URL = 'https://api.github.com/search/repositories';
  private readonly TOKEN = environment.githubToken;

  constructor(private http: HttpClient) {}

  getPopularRepositories(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `token ${this.TOKEN}`
    });

    const params = {
      q: 'stars',
      sort: 'stars',
      order: 'desc'
    };

    return this.http.get<{ items: GitHubRepo[] }>(this.BASE_URL, { headers, params });
  }
}
