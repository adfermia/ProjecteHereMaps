
import { Routes, RouterModule } from '@angular/router';
import { InputsFormComponent } from './inputs-form/inputs-form.component';
import { OnlineComponent } from './online/online.component';
import { PagesComponent } from './pages.component';
import { LoginGuard } from '../services/guards/login.guard';



const componentsRoutes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'inputsForm', component: InputsFormComponent},
      { path: 'online', component: OnlineComponent},
      { path: '', redirectTo: '/inputsForm', pathMatch: 'full'}

    ]
  }
];

export const COMPONENTS_ROUTES = RouterModule.forChild(componentsRoutes);
