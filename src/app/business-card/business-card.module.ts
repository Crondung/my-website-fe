import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedLogoComponent } from '../animated-logo/animated-logo.component';
import { BusinessCardComponent } from './business-card.component';
import { NgIconsModule } from '@ng-icons/core';
import { iconoirGithub, iconoirLinkedin, iconoirMail } from '@ng-icons/iconoir';
import { BusinessCardBackComponent } from './business-card-back/business-card-back.component';
import { BusinessCardFrontComponent } from './business-card-front/business-card-front.component';
import { PokemonModule } from '../pokemon/pokemon.module';

@NgModule({
  declarations: [
    BusinessCardComponent,
    AnimatedLogoComponent,
    BusinessCardFrontComponent,
    BusinessCardBackComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ iconoirMail, iconoirGithub, iconoirLinkedin }),
    PokemonModule,
  ],
  exports: [BusinessCardComponent],
})
export class BusinessCardModule {}
