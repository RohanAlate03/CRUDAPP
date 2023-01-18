import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddjobComponent } from './addjob/addjob.component';
import { JoblistComponent } from './joblist/joblist.component';
import { UpdatejobComponent } from './updatejob/updatejob.component';

const routes: Routes = [
  {path:"jobs",component:JoblistComponent},
  {path:"addjob",component:AddjobComponent},
  {path:"updatejob/:id",component:UpdatejobComponent},
  {path:"",redirectTo:'jobs',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
