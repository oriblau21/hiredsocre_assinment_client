import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CandidateService } from './candidate.service';
import { CandidatesComponent } from './candidates/candidates.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [	
    AppComponent,
    CandidatesComponent
   ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    CandidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
