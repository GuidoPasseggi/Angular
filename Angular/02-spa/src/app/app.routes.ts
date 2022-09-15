// 1) a este archivo de rutas lo creamos a mano.
// 2) UPDATE! con los snippets de "Angular 8 and TypeScript/HTML VS Code Snippets v1.0.22"
// y colocando "ag-routes", se crea algo muy similar a lo que hace el profe con "ng2-routes" (ng2 a mi no me funciona)

// import { RouterModule, Routes } from '@angular/router';

// const APP_ROUTES: Routes = [
//   { path: 'routePath', component: Component },
//   { path: '**', pathMatch: 'full', redirectTo: '' },
// ];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// esta linea no se si la puse yo por accidente probando snippets:
import { __importDefault } from 'tslib';

import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
