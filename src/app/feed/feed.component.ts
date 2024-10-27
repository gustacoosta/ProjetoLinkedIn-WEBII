import { Component } from '@angular/core';
import * as data from '../../assets/feed/post.json';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  feed = data.posts;

  toggleLike(event: Event, info: any) {
    event.preventDefault(); // Impede o comportamento padrão do link
    info.liked = !info.liked; // Alterna o estado do "gostei"
  }
}
