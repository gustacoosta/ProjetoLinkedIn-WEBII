import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent implements OnInit {
  dados: any[] = [];  // Lista de pessoas será carregada aqui
  selectedUser: any;
  selectedUserIndex: number = 0; 

  constructor(private userService: ServerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userIndex = this.route.snapshot.paramMap.get('id'); // Pega o índice da URL

    this.userService.getUsers().subscribe((data) => {
      this.dados = data.pessoa; // Acessa a chave 'pessoa' do JSON

      if (userIndex !== null) {
        this.selectedUserIndex = +userIndex;
        this.selectedUser = this.dados[this.selectedUserIndex]; 
      } else {
        this.selectedUser = this.dados[0]; // Usuário padrão
      }
    });
  }

  selectUser(user: any, index: number) {
    this.selectedUser = user;
    this.selectedUserIndex = index;
  }
}
