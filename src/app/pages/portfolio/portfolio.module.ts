import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { DescriptionComponent } from './description/description.component';
import { ImagesSectionComponent } from './images-section/images-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ExpSectionComponent } from './exp-section/exp-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { CertificationSectionComponent } from './certification-section/certification-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';



@NgModule({
  declarations: [
    HomeComponent,
    DescriptionComponent,
    ImagesSectionComponent,
    ProjectsSectionComponent,
    ExpSectionComponent,
    SkillsSectionComponent,
    CertificationSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
  ]
})
export class PortfolioModule { }
