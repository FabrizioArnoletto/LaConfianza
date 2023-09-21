import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CrudProductosComponent } from './crud-productos/crud-productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
  { path:'', component: InicioComponent },
  { path:'contacto', component: ContactoComponent },
  { path:'nosotros', component: NosotrosComponent },
  { path:'login', component: LoginComponent },
  { path:'crud', component: CrudProductosComponent },
  { path:'productos', component: ProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }