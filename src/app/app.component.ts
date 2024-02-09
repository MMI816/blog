import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { INoticia } from './interfaces/i-noticia.interface';
import { FormComponent } from './components/form/form.component';
import { NoticesComponent } from './components/notices/notices.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, NoticesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrNoticias: INoticia[] = [
    {
      title: "La lucha CONTRA EL DESPERDICIO ALIMENTARIO ganó la partida en Madrid Fusión 2024",
      image: "https://www.cuentamealgobueno.com/wp-content/uploads/2024/02/coffeetogo-3926395_640.jpg",
      text: "El cocinero valenciano Ricard Camarena recibió el premio “Defensa del Producto Alimentos de España” durante la celebración de la vigésima edición Madrid Fusion. Este reconoce su lucha contra el desperdicio alimentario. Esto ocurrió en el Congreso Internacional de Alta Cocina Madrid Fusión Alimentos de España y el Ministro de Agricultura, Pesca y Alimentación, Luis Planas, acudió al evento para hacer entrega de este galardón.",
      date: "8 febrero 2024",
    },
    {
      title: "La APP de voluntariado VOLUNCLOUD bate el récord de usuarios",
      image: "https://www.cuentamealgobueno.com/wp-content/uploads/2024/02/20240206-voluncloud-1024x640.jpg",
      text: "En enero, Voluncloud, la app que une a personas y ONG que necesitan voluntariado, ha rozado las 6.000 inscripciones ciudadanas y cuenta ya con 315 entidades sociales registradas en todo el Estado, lo que supone la cifra más alta de su historia.Según el último informe de la Plataforma del Voluntariado (PVE), editado el pasado mes de diciembre, en España hay más 4,5 millones de personas que hacen voluntariado.",
      date: "6 febrero 2024",
    }
  ]

  insertNotice ($event:INoticia) : void {
    this.arrNoticias.push($event);
  }
}
