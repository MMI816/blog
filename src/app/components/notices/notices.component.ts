import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/i-noticia.interface';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [],
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.css'
})
export class NoticesComponent {
  @Input() blog: INoticia[] = [];
  ngOnInit() : void {
    this.cargarDatos()
  }

  cargarDatos() : string {
    let html = "";
    this.blog.forEach(noticia =>{
      html += `<article>
                  <h3>${noticia.title} - ${noticia.image} - ${noticia.text} - ${noticia.date}</h3>
              </article>`
    })
    return html
  }
}
