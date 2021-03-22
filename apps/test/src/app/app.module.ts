import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestAppComponentComponent } from './test-app-component/test-app-component.component';

@NgModule({
  declarations: [AppComponent, TestAppComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
