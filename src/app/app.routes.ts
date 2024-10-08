import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'home',
		title: 'Home',
		loadComponent: () => import('./pages/home/home.component')
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'users',
		title: 'Usuarios',
		loadComponent: () => import('./pages/users/users.component')
	}
];
