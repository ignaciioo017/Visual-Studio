import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent

    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
  })
  export class SharedModule { }