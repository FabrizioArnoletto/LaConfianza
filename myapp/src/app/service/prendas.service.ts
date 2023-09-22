
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Prenda } from '../interfaces/prenda';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    //http://localhost:3000/
        
    this.myAppUrl = 'http://localhost:3000/'; 
    this.myApiUrl = 'api/prendas/';
  }
  // Obiente de la interfaces creadas
  getListPrendas() : Observable<Prenda[]>{
    return this.http.get<Prenda[]>(this.myAppUrl+this.myApiUrl);
  }
  // Borrar Prenda
  deletePrenda(id:number): Observable<void>{ 
    return this.http.delete<void>(this.myAppUrl+this.myApiUrl+id);
  }
  // Nuevo Prenda n
  savePrenda(Prenda:Prenda): Observable<void>{
    return this.http.post<void>(this.myAppUrl+this.myApiUrl, Prenda);
  }
  // Buscar un Prenda
  getPrenda(id: number): Observable<Prenda>{
    return this.http.get<Prenda>(this.myAppUrl+this.myApiUrl+id);
  }
  // Actualizar un Prenda
  putPrenda(id:number, Prenda:Prenda): Observable<void>{
    return this.http.put<void>(this.myAppUrl+this.myApiUrl+id, Prenda);
  }
}

