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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseModulosModule } from './firebase-modulos/firebase-modulos.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
      SurveyComponent,
      LoginComponent,
      AdminComponent,


   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FirebaseModulosModule,
      ReactiveFormsModule,
      FormsModule



   ],

   providers: [],
   bootstrap: [
      AppComponent,
      SurveyComponent
   ]
})
export class AppModule { }
