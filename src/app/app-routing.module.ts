import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { ProviderComponent } from 'src/components/provider/provider.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Provider',component:ProviderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
