import { Component, Input } from '@angular/core';
import * as data from '../../../assets/curriculo/dados.json'; // Importa o JSON

@Component({
  selector: 'app-curriculo-sobre',
  templateUrl: './curriculo-sobre.component.html',
  styleUrls: ['./curriculo-sobre.component.css']
})
export class CurriculoSobreComponent {
  @Input() userIndex?: number; // Recebe o índice do usuário

  // Getter que acessa os dados do JSON com base no índice
  get info() {
    const index = this.userIndex ?? 0; // Usa 0 se userIndex for undefined
    // Verifica se o índice existe no JSON
    if (index >= 0 && index < data.pessoa.length) {
      return data.pessoa[index];
    }
    // Fallback se o índice não for válido
    return data.pessoa[0];
  }
}
