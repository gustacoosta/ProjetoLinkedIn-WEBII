import { Component } from '@angular/core';
import * as data from '../../assets/feed/post.json';
import { Post } from '../post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  feed = data.posts;

  //curtida
  toggleLike(event: Event, info: any) {
    event.preventDefault(); 
    info.liked = !info.liked; 
  }

  //compartilhar email
  compartilharPorEmail(postUrl: string): string {
    const subject = encodeURIComponent('Confira este post!');
    const body = encodeURIComponent(`Veja este post interessante: ${postUrl}`);
    return `mailto:?subject=${subject}&body=${body}`;
  }
  

}
