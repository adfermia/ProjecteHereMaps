import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';




const appRoutes: Routes = [

{ path: 'login', component: LoginComponent},
{ path: 'home', component: HomeComponent},
{ path: '**', component: HomeComponent},

];


export const APP_ROUTES = RouterModule.forRoot(appRoutes);


