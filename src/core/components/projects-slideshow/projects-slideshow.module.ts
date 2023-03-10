import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsSlideshowComponent } from './components/projects-slideshow/projects-slideshow.component';
import { SwiperModule } from 'swiper/angular';
import { MatIconModule } from '@angular/material/icon';
import { UnderlinedButtonModule } from '../underlined-button/underlined-button.module';
import { RouterModule } from '@angular/router';
import { ProjectCardModule } from '../project-card/project-card.module';


@NgModule({
  declarations: [
    ProjectsSlideshowComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    MatIconModule,
    UnderlinedButtonModule,
    RouterModule,
    ProjectCardModule,
  ],
  exports: [
    ProjectsSlideshowComponent,
  ]
})
export class ProjectsSlideshowModule { }
