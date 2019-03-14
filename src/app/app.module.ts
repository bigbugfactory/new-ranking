import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/auth.interceptor';
import { AdminModule } from './modules/admin/admin.module';
import { FlashMessangerModule } from './modules/flash-messanger.module';
import { RankingComponent } from './modules/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlashMessangerModule,
    BrowserAnimationsModule,
    AdminModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    [
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
