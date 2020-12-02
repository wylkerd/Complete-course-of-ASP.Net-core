import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos: any = [
    {
      EventoId: 1, 
      Tema: 'Angular', 
      Local: 'São Paulo'
    },
    {
      EventoId: 2, 
      Tema: 'Python', 
      Local: 'São Paulo'
    },
    {
      EventoId: 3, 
      Tema: '.Net Core', 
      Local: 'Rio de Janeiro'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
