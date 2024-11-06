import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Post } from '../post.model'; 

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed: Post[] = [];

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.loadFeed();
    this.serverService.getPostsObservable().subscribe(posts => {
      this.feed = posts.reverse(); 
    });
  }
  
  loadFeed() {
    this.serverService.getPosts().subscribe(posts => {
      this.feed = posts.reverse(); 
      this.serverService.savePosts(this.feed); //Adicionei para não sumir os posts do json
    });
  }
  
  onPostAdded(newPost: Post) {
    this.feed.unshift(newPost); // Adiciona o post no topo do feed
    // Atualiza o localStorage com o novo post
    this.serverService.savePosts(this.feed); 
  }

  toggleLike(event: Event, info: any) {
    event.preventDefault();
    info.liked = !info.liked;
    this.serverService.savePosts(this.feed); 
    // Atualiza o array feed no componente 
    this.feed = this.serverService.loadPostsFromLocalStorage(); 
  }

  deletePost(event: Event, post: Post) {
    event.preventDefault(); // Impede o recarregamento da página
  
    // Encontra o índice do post a ser excluído
    const index = this.feed.indexOf(post); 
  
    // Remove o post do array
    if (index > -1) {
      this.feed.splice(index, 1); // Remove o post do array feed
    }
  
    // Atualiza o localStorage
    this.serverService.savePosts(this.feed);
    this.feed = this.serverService.loadPostsFromLocalStorage(); //Adicionei para não trocar a sequencia dos posts
  }
  
}
