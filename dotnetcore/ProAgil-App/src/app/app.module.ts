import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DateTimeFormatPipePipe } from './helps/DateTimeFormatPipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';

import { EventoService } from './services/evento.service';

import { AppComponent } from './app.component';
import { EventosComponent } from './Eventos/Eventos.component';
import { NavComponent } from './nav/nav.component';
import { PalestrantesComponent } from './Palestrantes/Palestrantes.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { ContatosComponent } from './Contatos/Contatos.component';
import { TituloComponent } from './shared/Titulo/Titulo.component';
import { UserComponent } from './User/User.component';
import { LoginComponent } from './User/Login/Login.component';
import { RegistrationComponent } from './User/Registration/Registration.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { EventoEditComponent } from './Eventos/EventoEdit/EventoEdit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EventosComponent,
    EventoEditComponent,
    PalestrantesComponent,
    DashboardComponent,
    ContatosComponent,
    TituloComponent,
    DateTimeFormatPipePipe,
    UserComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule, BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    NgxCurrencyModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
