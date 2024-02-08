import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { INoticia } from './interfaces/i-noticia.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrNoticias: INoticia[] = [
    {
      title: "",
      image: "",
      text: "",
      date: 0,
    },
    {
      title: "",
      image: "",
      text: "",
      date: 0,
    }
  ]
}
