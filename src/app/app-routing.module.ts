import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => loadRemoteModule({type: 'module', remoteEntry: 'http://localhost:4201/remoteEntry.js', exposedModule: './PruebaModule'}).then((mf) => mf.PruebaModule), 
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
