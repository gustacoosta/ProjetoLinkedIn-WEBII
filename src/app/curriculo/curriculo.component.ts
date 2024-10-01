import { Component } from '@angular/core';

import * as data from '../../assets/curriculo/dados.json';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.css'
})
export class CurriculoComponent {
  info = data.pessoa[0];
}
