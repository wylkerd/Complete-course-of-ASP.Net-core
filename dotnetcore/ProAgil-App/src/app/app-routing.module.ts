import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosComponent } from './Contatos/Contatos.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { EventosComponent } from './Eventos/Eventos.component';
import { PalestrantesComponent } from './Palestrantes/Palestrantes.component';

const routes: Routes = [
  { path: 'eventos', component: EventosComponent },
  { path: 'palestrantes', component: PalestrantesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
