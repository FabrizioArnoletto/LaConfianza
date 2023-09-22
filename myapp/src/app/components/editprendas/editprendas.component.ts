import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prenda } from 'src/app/interfaces/prenda';
import { PrendaService } from 'src/app/service/prendas.service';

@Component({
  selector: 'app-editprendas',
  templateUrl: './editprendas.component.html',
  styleUrls: ['./editprendas.component.css']
})

export class EditprendasComponent implements OnInit {

  formPrenda: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string= "Agregar ";

  constructor (private fb: FormBuilder,
    private _prendaService: PrendaService,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.formPrenda = this.fb.group({
      // Se pueden hacer validaciones
      nombre: ['', Validators.required],
      talle: ['', Validators.required],
      color: ['', Validators.required],
      precio: [null, Validators.required],
      preciotarjeta: [null, Validators.required],
      imagen: ['', Validators.required],
  })
  //Recoge id cuando editamos o agregamos null
  this.id= Number(aRouter.snapshot.paramMap.get('id'));
  console.log(this.id);
}

  ngOnInit(): void {
    if (this.id != 0){
      this.operacion = 'Editar ';
      this.getPrenda(this.id);
    }
  }

  getPrenda(id: number)  {
    this.loading = true;
    this._prendaService.getPrenda(id).subscribe((data:Prenda)=> {
      console.log(data);
      this.loading=false;
      this.formPrenda.patchValue({
        nombre: data.nombre,
        talle: data.talle,
        color: data.color, 
        precio: data.precio,
        preciotarjeta: data.preciotarjeta,
        imagen: data.imagen  
      })
    })
  }

  addPrenda(): void {
  //console.log('addPrenda')
  const Prenda : Prenda = {
    nombre: this.formPrenda.value.nombre,
    talle: this.formPrenda.value.talle,
    color: this.formPrenda.value.color,
    precio: this.formPrenda.value.precio,
    preciotarjeta: this.formPrenda.value.preciotarjeta,
    imagen: this.formPrenda.value.imagen
  }
  this.loading=true;
  if (this.id!=0){
    // Editar - update product
    Prenda.id = this.id;
    this._prendaService.putPrenda(this.id, Prenda).subscribe(()=> {
      console.log('Prenda Actualizado con exito');
      this.loading=false;
      this.router.navigate(['/login']);

    })
  }else {
    // Es Agregar
    this._prendaService.savePrenda(Prenda).subscribe(() => {
      console.log('Prenda Agregado');
      this.loading=false;
      this.router.navigate(['/login']);
    })
  }

  }
}
