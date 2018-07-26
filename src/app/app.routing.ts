//importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

//importar componentes
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideoJuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";


//Array Rutas
const appRoutes: Routes= [
    { path: '', component:HomeComponent},
    { path: 'home', component:HomeComponent},
    { path: 'zapatillas', component:ZapatillasComponent},
    { path: 'videojuego', component:VideoJuegoComponent},
    { path: 'cursos', component:CursosComponent},
    { path: 'cursos/:nombre', component:CursosComponent},
    { path: '**', component:HomeComponent}
];
    
//Exportar el modulo de routing
export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);