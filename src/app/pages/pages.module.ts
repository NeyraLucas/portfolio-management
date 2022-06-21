import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioModule } from './portfolio/portfolio.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PortfolioModule
  ],
  exports:[
    PortfolioModule
  ]
})
export class PagesModule { }
