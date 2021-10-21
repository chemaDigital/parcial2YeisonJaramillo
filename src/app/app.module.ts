import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes';

import { jamesService } from './service/james.service';
import { homeService } from './service/home.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RonaldoComponent } from './components/ronaldo/ronaldo.component';
import { MessiComponent } from './components/messi/messi.component';
import { JamesComponent } from './components/james/james.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RonaldoComponent,
    MessiComponent,
    JamesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [jamesService, homeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
