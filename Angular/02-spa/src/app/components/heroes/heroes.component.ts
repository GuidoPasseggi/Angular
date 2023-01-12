import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  //es private porque solo se usa para este componente (Heroes)
  constructor(private _heroesService: HeroesService, private router: Router) {
    // console.log('constructor');
  }

  // el void no estaba en el codigo del profe, tal vez es de Angular v5
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe ', idx]);
    // console.log(idx);
  }
}
