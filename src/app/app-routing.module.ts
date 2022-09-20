import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from 'src/components/calendar/calendar.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ProviderComponent } from 'src/components/provider/provider.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Provider',component:ProviderComponent},
  {path:'Calendar',component:CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
