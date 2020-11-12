import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USER_ROUTES } from './components/usuario/usuario.routes';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    // tslint:disable-next-line: max-line-length
    { path: 'usuario/:id', component: UsuarioComponent, children: USER_ROUTES}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
