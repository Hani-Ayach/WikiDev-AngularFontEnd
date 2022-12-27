import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { AuthInterceptoreService } from './layouts/visitor/auth/auth-interceptore.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptoreService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
