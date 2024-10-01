import { Component } from '@angular/core';
import * as data from '../../../assets/curriculo/dados.json';

@Component({
  selector: 'app-curriculo-sobre',
  templateUrl: './curriculo-sobre.component.html',
  styleUrl: './curriculo-sobre.component.css'
})
export class CurriculoSobreComponent {
  info = data.pessoa[0];
}
