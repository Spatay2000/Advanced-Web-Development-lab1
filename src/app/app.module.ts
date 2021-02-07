import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { FormsModule } from '@angular/forms';
import { MyResultsComponent } from './my-results/my-results.component';


@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    MyResultsComponent,
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
