import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/Evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.scss'],
  //providers: [EventoService]
})
export class EventosComponent implements OnInit {

  ////////////// ENCAPSULAMENTO FILTRO TEMA
  _filtroLista!: string;

  get filtroLista(): string {
    return this._filtroLista;
  }

  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos; 
  }
  ///////////////////////// ENCAPSULAMENTO FILTRO CIDADE

  _filtroCidade!: string;

  get filtroCidade(): string {
    return this._filtroCidade;
  }

  set filtroCidade(value: string) {
    this._filtroCidade = value;
    this.eventosFiltrados = 
      this.filtroCidade ? this.filtrarEventosByCidade(this.filtroCidade) : this.eventos; 
  }

  ///////////////////////// ENCAPSULAMENTO FILTRO CAPACIDADE

  _filtroCapacidade: string;

  get filtroCapacidade(): string {
    return this._filtroCapacidade;
  }

  set filtroCapacidade(value: string) {
    this._filtroCapacidade = value;
    this.eventosFiltrados = 
      this.filtroCapacidade ? this.filtrarEventosByCapacidade(this.filtroCapacidade) : this.eventos; 
  }

  ///////////////////////////

  eventosFiltrados: Evento [];

  eventos: Evento [];
  imagemLargura = 50;
  imagemMargin = 2;
  mostrarImagem = false;
  

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.getEventos();
  }

  filtrarEventos(filtarPor: string): Evento[] {
    filtarPor = filtarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtarPor) !== -1
    );
  }

  filtrarEventosByCidade(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      eventoCidade => eventoCidade.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  filtrarEventosByCapacidade(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toString();
    return this.eventos.filter(
      eventoCapacidade => eventoCapacidade.qtdPessoas.toString().indexOf(filtrarPor) !== -1
    )
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
