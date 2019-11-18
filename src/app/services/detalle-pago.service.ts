import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetallePagoService {

  formularioDetallePago:FormGroup;

  constructor() { }
}
