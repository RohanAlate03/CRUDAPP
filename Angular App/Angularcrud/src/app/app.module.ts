import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoblistComponent } from './joblist/joblist.component';
import{ HttpClientModule} from '@angular/common/http';
import { AddjobComponent } from './addjob/addjob.component';
import { FormsModule } from '@angular/forms';
import { UpdatejobComponent } from './updatejob/updatejob.component';

@NgModule({
  declarations: [
    AppComponent,
    JoblistComponent,
    AddjobComponent,
    UpdatejobComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
