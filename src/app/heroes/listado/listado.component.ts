import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

heroes: string[]=['Goku','Spiderman','Iroman', 'Vegueta','Hulk'];
heroeBorrado: string='';

borrar():void{

this.heroeBorrado = this.heroes.shift() || '';
}
}

