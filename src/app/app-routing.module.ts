import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'quienes',
    component: QuienesComponent
  },
  {
    path: 'contacto/:variable',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
