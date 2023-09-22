import { Component, OnInit } from '@angular/core';
import { Prenda } from 'src/app/interfaces/prenda';
import { PrendaService } from 'src/app/service/prendas.service';

@Component({
  selector: 'app-listprendas',
  templateUrl: './listprendas.component.html',
  styleUrls: ['./listprendas.component.css']
})
export class ListprendasComponent  {

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
  deletePrenda(id:number){
    this.loading=true;
    this._prendaService.deletePrenda(id).subscribe((data)=> {
      console.log(data);
      this.getListPrendas();
      this.loading=false;
    })
  }

}
