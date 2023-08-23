import { Component } from '@angular/core';

@Component({
  selector: 'app-poupup-comp',
  templateUrl: './poupup-comp.component.html',
  styleUrls: ['./poupup-comp.component.scss']
})
export class PoupupCompComponent {
  text__status = 'Заведение'
  page:any = 1

  nextPage(){
    if (this.page != 4) {
      this.page++
    }
    if (this.page > 1){
      this.text__status = 'Ваш бизнес'
    }
    if (this.page == 1){
      this.text__status = 'Заведение'
    }
  }
  orevPage(){
    if (this.page >= 1) {
      this.page--
    }
    if (this.page != 1){
      this.text__status = 'Ваш бизнес'
    }
    if (this.page == 1){
      this.text__status = 'Заведение'
    }
  }
}
