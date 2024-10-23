import { Component } from '@angular/core';
import * as data from '../../../assets/curriculo/dados.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curriculo-formacao',
  templateUrl: './curriculo-formacao.component.html',
  styleUrl: './curriculo-formacao.component.css'
})
export class CurriculoFormacaoComponent {
  dados: any = (data as any).default;
  selectedUser: any;
  userId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Capturando o 'id' da rota
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log(this.userId);

      if (this.userId && this.dados.pessoa[this.userId]) {
        this.selectedUser = this.dados.pessoa[this.userId]; 
      } else {
        console.error("Usuário não encontrado ou ID inválido");
      }
    });
  }
}
