import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from "./search-bar.component";


@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [SearchBarComponent]
})
export class SearchBarModule { }
