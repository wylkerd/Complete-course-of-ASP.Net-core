import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Evento } from '../models/Evento';
import { EventoService } from '../services/evento.service';

import { defineLocale, ptBrLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ToastrService } from 'ngx-toastr';

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.scss'],
  //providers: [EventoService]
})
export class EventosComponent implements OnInit {

  eventosFiltrados: Evento [];
  eventos: Evento [];

  evento: Evento;
  modoSalvar = 'post';

  imagemLargura = 50;
  imagemMargin = 2;
  mostrarImagem = false;
  registerForm: FormGroup;
  bodyDeletarEvento = '';
  
  constructor(
    private eventoService: EventoService
  , private modalService: BsModalService
  , private fb: FormBuilder
  , private localeService: BsLocaleService
  , private toastr: ToastrService
  ) { 
    this.localeService.use('pt-br');
  }

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

  editarEvento(evento: Evento, template: any) {
    this.modoSalvar = 'put';
    this.openModal(template);
    this.evento = evento;
    this.registerForm.patchValue(evento);
  }

  novoEvento(template: any) {
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  openModal(template:any) {
    this.registerForm.reset();
    template.show();
  }

  ngOnInit() {
    this.validation();
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

  validation() {
    this.registerForm = this.fb.group({
      tema: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      local: ['', Validators.required],
      dataEvento: ['', Validators.required],
      imagemURL: ['', Validators.required],
      qtdPessoas: ['', [Validators.required, Validators.max(120000)]],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  getEventos() {
    this.eventoService.getAllEventos().subscribe(
      (_eventos: Evento[]) => { 
      this.eventos = _eventos;
      this.eventosFiltrados = this.eventos;
    }, error => {
      this.toastr.error(`Erro ao tentar carregar eventos: ${error}`);
    });
  }

  salvarAlteracao(template: any) {
    if(this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.evento = Object.assign({}, this.registerForm.value);
        this.eventoService.postEvento(this.evento).subscribe(
          (novoEvento: Evento) => {
            console.log(novoEvento);
            template.hide();
            this.getEventos();
            this.toastr.success('Inserido com sucesso!');
          }, error => {
            this.toastr.error(`Erro ao inserir: ${error}`);
          }
        );
      } else {
        this.evento = Object.assign({ id: this.evento.id }, this.registerForm.value);
        this.eventoService.putEvento(this.evento).subscribe(
          () => {
            template.hide();
            this.getEventos();
            this.toastr.success('Editado com sucesso!');
          }, error => {
            this.toastr.error(`Erro ao editar: ${error}`);
          }
        );
      }
    }
  }

  excluirEvento(evento: Evento, template: any) {
    this.openModal(template);
    this.evento = evento;
    this.bodyDeletarEvento = `Tem certeza que deseja excluir o Evento: ${evento.tema}, Código: ${evento.id}`;
  }

  confirmeDelete(template: any) {
    this.eventoService.deleteEvento(this.evento.id).subscribe(
      () => {
          template.hide();
          this.getEventos();
          this.toastr.success('Deletado com sucesso!');
        }, error => {
          this.toastr.error('Erro ao tentar deletar!');
          console.log(error);
        }
    );
  }

}
