import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { NoEcontradoComponent } from './components/no-econtrado/no-econtrado.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent, title: 'Inicio' },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent, title: 'Productos' },
  { path: 'servicios', component: ServiciosComponent, title: 'Servicios' },
  { path: 'nosotros', component: NosotrosComponent, title: 'Nosotros' },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto' },
  {
    path: 'registrarse',
    component: RegistrarseComponent,
    title: 'Registrarse',
  },
  {
    path: 'iniciarsesion',
    component: IniciarsesionComponent,
    title: 'Iniciar Sesion',
  },
  { path: 'privado', component: PrivadoComponent, title: 'Privado' },
  { path: '**', component: NoEcontradoComponent, title: '404' },
];
