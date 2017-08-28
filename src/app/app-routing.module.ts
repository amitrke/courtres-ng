import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloDBComponent } from './hello-db/hello-db.component';
const routes: Routes = [
  { path: '', redirectTo: '#app', pathMatch: 'full' },
  { path: 'app',  component: AppComponent },
  { path: 'my',  component: HelloDBComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
