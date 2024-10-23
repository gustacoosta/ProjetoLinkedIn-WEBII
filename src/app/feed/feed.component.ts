import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit{
  posts: Post[] = [
    {
      author: 'Kawan Xavier',
      title: 'Desenvolvedor Back-End',
      content: 'BR: O Brasil tem hoje 10 milhões de pessoas surdas. Imagine aprender Libras ou usar uma ferramenta para conversar com elas...',
      image: 'assets/post-image.jpg' // Substitua pela URL da imagem
    },
    {
      author: 'Paulo Castellani',
      title: 'Vagas de TI',
      content: 'Atuando como Job Hunter, estou aqui para oferecer suporte personalizado em sua jornada rumo ao próximo passo em sua carreira. Possuo experiência auxiliando profissionais a alcançarem seus objetivos, estando comprometido em...',
      image: 'null'
    }
  ];

}
