import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
