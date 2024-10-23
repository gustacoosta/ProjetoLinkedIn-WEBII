import { Component } from '@angular/core';
import * as data from '../../assets/feed/post.json';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  feed = data.posts;
}
