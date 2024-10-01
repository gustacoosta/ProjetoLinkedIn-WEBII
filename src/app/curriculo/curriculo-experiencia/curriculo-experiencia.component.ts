import { Component } from '@angular/core';
import * as data from '../../../assets/curriculo/dados.json';

@Component({
  selector: 'app-curriculo-experiencia',
  templateUrl: './curriculo-experiencia.component.html',
  styleUrl: './curriculo-experiencia.component.css'
})
export class CurriculoExperienciaComponent {
  info = data.pessoa[0];
}
