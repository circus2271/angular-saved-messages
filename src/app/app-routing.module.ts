import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BreedsListComponent} from "./breeds-list/breeds-list.component";
import {BreedsResolver} from "./resolvers/breeds.resolver";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'breeds-list',
    component: BreedsListComponent,
    resolve: {
      breeds: BreedsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
