import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-diferentao',
  templateUrl: './diferentao.component.html',
  styleUrl: './diferentao.component.css'
})
export class DiferentaoComponent implements OnInit {
  repositories: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getPopularRepositories().subscribe(
      (data) => {
        this.repositories = data.items;
      },
      (error) => {
        console.error('Erro ao buscar repositórios:', error);
      }
    );
  }
}

