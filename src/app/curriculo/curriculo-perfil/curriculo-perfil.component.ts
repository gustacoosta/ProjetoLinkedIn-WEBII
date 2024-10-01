import { Component } from '@angular/core';
import * as data from '../../../assets/curriculo/dados.json';

@Component({
  selector: 'app-curriculo-perfil',
  templateUrl: './curriculo-perfil.component.html',
  styleUrl: './curriculo-perfil.component.css'
})
export class CurriculoPerfilComponent {
  info = data.pessoa[0];
}
