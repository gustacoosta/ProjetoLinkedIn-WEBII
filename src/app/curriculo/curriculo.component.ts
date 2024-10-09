import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css'] 
})
export class CurriculoComponent implements OnInit {
  dados: any[] = [];
  selectedUser: any;

  constructor(private userService: ServerService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.dados = data; 
      this.selectedUser = this.dados[0];  
    });
  }

  selectUser(data: any) {
    this.selectedUser = data;
  }
}
