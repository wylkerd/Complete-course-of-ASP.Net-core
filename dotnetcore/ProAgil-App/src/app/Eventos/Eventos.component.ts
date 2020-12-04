import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.scss']
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

  eventosFiltrados: any = [];

  eventos: any = [];
  imagemLargura = 50;
  imagemMargin = 2;
  mostrarImagem = false;
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  filtrarEventos(filtarPor: string): any {
    filtarPor = filtarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtarPor) !== -1
    );
  }

  filtrarEventosByCidade(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      eventoCidade => eventoCidade.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  filtrarEventosByCapacidade(filtrarPor: string): any {
    filtrarPor = filtrarPor.toString();
    return this.eventos.filter(
      eventoCapacidade => eventoCapacidade.qtdPessoas.toString().indexOf(filtrarPor) !== -1
    )
  }

  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  getEventos() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => { 
      this.eventos = response; 
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
