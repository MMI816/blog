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

  cargarDatos(){
    console.log(this.blog)
  }
}
