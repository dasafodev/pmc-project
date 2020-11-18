import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { NavComponent } from './nav/nav.component';
import { PrecioComponent } from './precio/precio.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SurveyComponent } from './survey/survey.component';


@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      HomePageComponent,
      HeaderComponent,
      ServicesComponent,
      QuizPageComponent,
      NavComponent,
      PrecioComponent,
      EquipoComponent,
      ContactoComponent,
      SurveyComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent,
      SurveyComponent
   ]
})
export class AppModule { }
