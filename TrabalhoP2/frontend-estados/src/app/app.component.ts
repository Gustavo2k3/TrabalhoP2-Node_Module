import { Component, OnInit } from '@angular/core';
import { EstadoService } from './estado.service';

interface Estado {
  nome: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  estados: Estado[] = [];
  novoEstado: string = '';

  constructor(private estadoService: EstadoService) {}

  ngOnInit() {
    this.getEstados();
  }

  getEstados() {
    this.estadoService.getEstados().subscribe(estados => {
      this.estados = estados;
    });
  }

  addEstado() {
    if (this.novoEstado) {
      const estado: Estado = { nome: this.novoEstado };
      this.estadoService.addEstado(estado).subscribe(() => {
        this.getEstados();
        this.novoEstado = '';
      });
    }
  }

  deleteEstado(nome: string) {
    this.estadoService.deleteEstado(nome).subscribe(() => {
      this.getEstados();
    });
  }
}
