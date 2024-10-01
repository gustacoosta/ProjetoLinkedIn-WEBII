import { Component } from '@angular/core';
import * as data from '../../../assets/curriculo/dados.json';

@Component({
  selector: 'app-curriculo-formacao',
  templateUrl: './curriculo-formacao.component.html',
  styleUrl: './curriculo-formacao.component.css'
})
export class CurriculoFormacaoComponent {
  info = data.pessoa[0];
}
