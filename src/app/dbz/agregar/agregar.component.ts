import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() newCharacter: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService ) {}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if ( this.newCharacter.nombre.trim().length === 0 ) return;

    // this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.newCharacter );

    this.newCharacter = {
      nombre: '',
      poder: 0
    }

  }
}
