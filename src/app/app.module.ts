import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllIndicatorsComponent } from './components/all-indicators/all-indicators.component';

@NgModule({
  declarations: [
    AppComponent,
    AllIndicatorsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '**', component: AllIndicatorsComponent},
    ]),],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
