import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-films',
  standalone: true,
  imports: [],
  templateUrl: './liste-films.component.html',
  styleUrl: './liste-films.component.css'
})
interface films{
  nom:string,
  image:string,
  nbjaime:number,
  nbjaimepas:number,
  disponible:boolean

}
export class ListeFilmsComponent {
tabFilm :films[][
  {
    
  }
]
}
