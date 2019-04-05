import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { EquipoPagina } from '../interfaces/equipo-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  equipo: EquipoPagina = {};
  cargada = false;
  
  constructor(private http: HttpClient) {
      this.cargarInfo();
      this.cargarEquipo();
  }

  private cargarInfo() {

    this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      // console.log(resp);
      // console.log(resp['email']);
    });

  }

  private cargarEquipo() {
    this.http.get('https://angular-html-349c8.firebaseio.com/equipo.json').subscribe((resp: EquipoPagina) => {
      this.cargada = true;
      this.equipo = resp;
      // console.log(resp);
      // console.log(resp['email']);
    });
  }
}
