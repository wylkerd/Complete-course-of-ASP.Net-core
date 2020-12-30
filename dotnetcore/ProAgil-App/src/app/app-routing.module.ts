import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ContatosComponent } from './Contatos/Contatos.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { EventosComponent } from './Eventos/Eventos.component';
import { PalestrantesComponent } from './Palestrantes/Palestrantes.component';
import { LoginComponent } from './User/Login/Login.component';
import { RegistrationComponent } from './User/Registration/Registration.component';
import { UserComponent } from './User/User.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  },
  { path: 'eventos', component: EventosComponent, canActivate: [AuthGuard] },
  { path: 'palestrantes', component: PalestrantesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'contatos', component: ContatosComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
