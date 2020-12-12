import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Evento } from '../models/Evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.scss'],
  //providers: [EventoService]
})
export class EventosComponent implements OnInit {

  eventosFiltrados: Evento [];

  eventos: Evento [];
  imagemLargura = 50;
  imagemMargin = 2;
  mostrarImagem = false;
  modalRef: BsModalRef; 

  constructor(
    private eventoService: EventoService
  , private modalService: BsModalService
  ) { }

  ////////////// ENCAPSULAMENTO FILTRO TEMA
  
  _filtroTema = "";

  get filtroByTema(): string {
    return this._filtroTema;
  }

  set filtroByTema(value: string) {
    this._filtroTema = value;
    this.filtrarEventos(this._filtroTema, this._filtroLocal, this._filtroCapacidade); 
  }
  ///////////////////////// ENCAPSULAMENTO FILTRO CIDADE

  _filtroLocal = "";

  get filtroByLocal(): string {
    return this._filtroLocal;
  }

  set filtroByLocal(value: string) {
    this._filtroLocal = value;
    this.filtrarEventos(this._filtroTema, this._filtroLocal, this._filtroCapacidade); 
  }

  ///////////////////////// ENCAPSULAMENTO FILTRO CAPACIDADE

  _filtroCapacidade = "";

  get filtroByCapacidade(): string {
    return this._filtroCapacidade;
  }

  set filtroByCapacidade(value: string) {
    this._filtroCapacidade = value;
    this.filtrarEventos(this._filtroTema, this._filtroLocal, this._filtroCapacidade); 
  }

  ///////////////////////////  

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.getEventos();
  }

  filtrarEventos(filtroTema: string, filtroLocal: string, filtroCapacidade: string): Evento[]{
    filtroTema.toLocaleLowerCase();
    filtroLocal.toLocaleLowerCase();
    filtroCapacidade.toString();
    return this.eventosFiltrados = this.eventos.filter(evento => 
         evento.tema.toLocaleLowerCase().indexOf(filtroTema) !== -1
         && evento.local.toLocaleLowerCase().indexOf(filtroLocal) !== -1
         && evento.qtdPessoas.toString().indexOf(filtroCapacidade) !== -1);
  }

  sortBy(prop: string) {
    return this.eventosFiltrados.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
    
  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  getEventos() {
    this.eventoService.getAllEventos().subscribe(
      (_eventos: Evento[]) => { 
      this.eventos = _eventos;
      this.eventosFiltrados = this.eventos; 
      console.log(_eventos);
    }, error => {
      console.log(error);
    });
  }

}
