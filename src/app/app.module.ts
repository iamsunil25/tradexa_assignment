import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
//import { S1Directive } from './s1.directive';
//import { Comp2Component } from './comp2/comp2.component';
//import { Comp3Component } from './comp3/comp3.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { S1Service } from './s1.service';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    //S1Directive,
    //Comp2Component,
    //Comp3Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
