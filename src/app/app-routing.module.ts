import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { DiferentaoComponent } from './diferentao/diferentao.component';

const routes: Routes = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'curriculo/:id', component: CurriculoComponent },
  { path: 'diferentao', component: DiferentaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
