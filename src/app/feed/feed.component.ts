import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Post } from '../post.model'; // ajuste conforme necessário
import { AddPostDialogComponent } from './add-post/add-post-dialog/add-post-dialog';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed: Post[] = []; // Altere o tipo de feed para Post[]

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.loadFeed();
  }
  
  loadFeed() {
    this.serverService.getPosts().subscribe(posts => {
      this.feed = posts;
    });
  }  
  
  onPostAdded(newPost: Post) {
    this.feed.unshift(newPost); // Adiciona o novo post no topo do feed
  }

  toggleLike(event: Event, info: any) {
    event.preventDefault(); 
    info.liked = !info.liked; 
    this.serverService.savePosts(this.feed); // Atualiza o localStorage ao curtir/descurtir
  }
}
