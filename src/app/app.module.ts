import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ThemeService } from './ui-services/theme.service';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HomeModule],
  providers: [
    provideAnimationsAsync(),
    ThemeService
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule {}
