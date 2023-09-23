import { Component, OnInit } from '@angular/core';
import { Prenda } from 'src/app/interfaces/prenda';
import { PrendaService } from 'src/app/service/prendas.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  {

  listaPrendas: Prenda[]=[];
  loading: boolean = false;
  constructor(private _prendaService: PrendaService) {
  }

  ngOnInit() {
    this.getListPrendas();
  }
  getListPrendas() {
    this.loading = true;
    this._prendaService.getListPrendas().subscribe((data)=> {
      this.listaPrendas = data;
    this.loading = false;
    })
  }

}
