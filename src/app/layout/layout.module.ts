import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router'



@NgModule({
  declarations: [MainNavComponent, FooterComponent],
  exports: [MainNavComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
