import { Component } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  constructor(private sanitizer: DomSanitizer) {  } 

  title = 'angular-prueba';
  imageUrlArray = ["http://www.aitanatp.com/nivel6/ecosist/images/ecosistemas.jpg",
  "https://conceptodefinicion.de/wp-content/uploads/2017/03/Interacci%C3%B3n_de_los_Ecosistemas2.jpg",
"https://sites.google.com/site/losecosistemasdemexico/_/rsrc/1365595137465/introduccion/ecosistemas.jpg"];
 imagePath = "assets/img/image.jpg";

 urlSinProcesar = "//www.youtube.com/embed/Dv6h-C3MgWg?rel=0";

 urlSaneada = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlSinProcesar);

}
