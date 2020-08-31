import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProfileComponent } from './profile/profile.component';
// import { RepositoryComponent } from './repository/repository.component';
// import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // { path: 'profile', component: ProfileComponent},
  // { path: 'repository', component: RepositoryComponent},
  // { path:'**', component:NotFoundComponent},

  // {path: '', redirectTo:"/profile",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
