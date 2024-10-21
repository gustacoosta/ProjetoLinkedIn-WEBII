import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: any[] = []; 

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getPosts().subscribe((data) => {
      this.posts = data;  
      console.log(data);
    });
  }
}
