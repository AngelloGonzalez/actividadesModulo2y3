import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';


export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'ingreso', component: IngresoComponent},
    {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];
