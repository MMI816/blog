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
                  <h3>${noticia.title}</h3>  
                  <img src="${noticia.image}" alt="">
                  <p>${noticia.text}<p>
                  <p>${noticia.date}<p>  
              </article>`
    })
    return html
  }
}
