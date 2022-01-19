import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({

    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    imports:[
        CommonModule //para poder utilizar directivas ngFor - ngIf
    ],
    exports:[
        ListadoComponent,
        HeroeComponent
    ]
})
export class HeroesModule{

}