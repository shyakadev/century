import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BmoviesPage } from './bmovies';

@NgModule({
  declarations: [
    BmoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(BmoviesPage),
  ],
})
export class BmoviesPageModule {}
