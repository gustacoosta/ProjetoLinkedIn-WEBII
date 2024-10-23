import { Component } from '@angular/core';
import * as data from '../../../assets/curriculo/dados.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curriculo-experiencia',
  templateUrl: './curriculo-experiencia.component.html',
  styleUrl: './curriculo-experiencia.component.css'
})
export class CurriculoExperienciaComponent {
  dados: any = (data as any).default;
  selectedUser: any;
  userId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
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
