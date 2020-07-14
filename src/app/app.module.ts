import { NgModule } from '@angular/core';
import { FormioModule } from 'angular-formio';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component.ts';

@NgModule({
  imports: [
    BrowserModule,
    FormioModule
  ],
  declarations: [
    MainComponent
  ],
  bootstrap: [
    MainComponent
  ]
})
export class AppModule {}
