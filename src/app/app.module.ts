import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallePagosComponent } from './components/detalle-pagos/detalle-pagos.component';
import { DetallePagoComponent } from './components/detalle-pagos/detalle-pago/detalle-pago.component';
import { DetallePagoListaComponent } from './components/detalle-pagos/detalle-pago-lista/detalle-pago-lista.component';
import{FormsModule, ReactiveFormsModule}from "@angular/forms";
import{HttpClientModule} from '@angular/common/http';
import { FormularioComponent } from './components/formulario/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    DetallePagosComponent,
    DetallePagoComponent,
    DetallePagoListaComponent,
    FormularioComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
