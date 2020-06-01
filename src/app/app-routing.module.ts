import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./user/login/login.component";
import {CreateComponent} from "./task/create/create.component";
import {DefaultComponent} from "./default/default.component";


const routes: Routes = [
  {path: '', component: HomeComponent , pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'update/:id', component: HomeComponent, pathMatch: 'full'},
  {path: 'task/create', component: CreateComponent, pathMatch: 'full'},
  {path: '404', component:DefaultComponent},
  {path: '**', component:DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
