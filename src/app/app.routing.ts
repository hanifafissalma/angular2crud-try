import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DaftarComponent } from './daftar/daftar.component';
import { TambahComponent } from './tambah/tambah.component';
import { EditComponent } from './edit/edit.component';
const appRoutes: Routes=[
	{
		path:'',
		component: TambahComponent
	},
	{
		path:'daftar',
		component: DaftarComponent
	},
	{
		path:'edit/:id',
		component: EditComponent
	}
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);