import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { HeaderComponent } from './header/header.component';
import { CurriculoPerfilComponent } from './curriculo/curriculo-perfil/curriculo-perfil.component';
import { CurriculoSobreComponent } from './curriculo/curriculo-sobre/curriculo-sobre.component';
import { CurriculoExperienciaComponent } from './curriculo/curriculo-experiencia/curriculo-experiencia.component';
import { CurriculoFormacaoComponent } from './curriculo/curriculo-formacao/curriculo-formacao.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CurriculoComponent,
    HeaderComponent,
    CurriculoPerfilComponent,
    CurriculoSobreComponent,
    CurriculoExperienciaComponent,
    CurriculoFormacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
