import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'contact-manager', loadChildren: () => import('./contact-manager/contact-manager.module').then(module => module.ContactManagerModule) },
  { path:'demo', loadChildren: () => import('./demo/demo.module').then(module => module.DemoModule) },
  { path: '**', redirectTo: 'contact-manager', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
