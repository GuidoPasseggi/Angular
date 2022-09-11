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
import { __importDefault } from 'tslib';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);





