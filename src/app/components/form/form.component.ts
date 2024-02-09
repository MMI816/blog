import { Component, EventEmitter, Output } from '@angular/core';
import { INoticia } from '../../interfaces/i-noticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newNotice: INoticia = {title: "", image: "", text: "", date: ""}
  @Output() noticiaCargada: EventEmitter<INoticia> = new EventEmitter()

  guardar(): void {
    if(this.newNotice.title !=="" && this.newNotice.image !== "" && this.newNotice.text !== "" && this.newNotice.date !== ""){
      this.noticiaCargada.emit(this.newNotice)
      this.newNotice = {title: "", image: "", text: "", date: ""}
      alert("Gracias por tu noticia")
    }else {
      alert("Los campos están vacíos")
    }
  }
}
