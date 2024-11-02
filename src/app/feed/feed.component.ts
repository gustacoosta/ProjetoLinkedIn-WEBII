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
      this.feed = posts.reverse(); // Atualizar o feed
    });
  }
  
  loadFeed() {
    this.serverService.getPosts().subscribe(posts => {
      this.feed = posts.reverse(); 
    });
  } 
  
  onPostAdded(newPost: Post) {
    this.feed.unshift(newPost); //add post
  }

  toggleLike(event: Event, info: any) {
    event.preventDefault(); 
    info.liked = !info.liked; 
    // this.serverService.savePosts(this.feed); 
  }

  deletePost(event: Event, post: Post) {
    event.preventDefault(); // Impede o recarregamento da página
    
    // Remove o post do feed
    this.feed = this.feed.filter(p => p !== post); // Filtra o post a ser excluído
  
    // Atualiza o localStorage
    this.serverService.savePosts(this.feed);
  }
  
}
