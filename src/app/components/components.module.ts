import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InputsFormComponent } from './inputs-form/inputs-form.component';
import { PagesComponent } from './pages.component';
import { OnlineComponent } from './online/online.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { COMPONENTS_ROUTES } from './components.routes';
import { HereMapComponent } from './here-map/here-map.component';
import { ServicesModule } from '../services/services.module';
import { Translate } from '../services/pipes/translate.pipe';




@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    InputsFormComponent,
    PagesComponent,
    OnlineComponent,
    HereMapComponent,
    Translate
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    COMPONENTS_ROUTES,
    ServicesModule
  ]
})
export class ComponentsModule { }
