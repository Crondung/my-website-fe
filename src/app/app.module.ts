import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimatedLogoComponent } from './animated-logo/animated-logo.component';
import { BusinessCardModule } from './business-card/business-card.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    BusinessCardModule,
  ],
})
export class AppModule {}
