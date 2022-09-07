import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})

export class FooterComponent {

anio: number;

// PARA QUE EL AÑO DEL FOOTER SE ACTUALICE SOLO:
constructor(){
  this.anio = new Date().getFullYear();
}

}

// export class FooterComponent implements OnInit {
//   constructor() {}

//   ngOnInit(): void {}
// }
