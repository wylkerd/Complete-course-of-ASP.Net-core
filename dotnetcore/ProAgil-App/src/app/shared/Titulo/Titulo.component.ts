import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Titulo',
  templateUrl: './Titulo.component.html',
  styleUrls: ['./Titulo.component.scss']
})
export class TituloComponent implements OnInit {
  title = 'ProAgil Eventos';
  constructor() { }

  ngOnInit() {
  }

}
