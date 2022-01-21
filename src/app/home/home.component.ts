import {Component, OnInit, ViewEncapsulation} from '@angular/core';

// import Swiper core and required modules
// import SwiperCore from "swiper";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  readonly title = "Откройте счет и ведите бизнес";
  readonly subtitle = "Открытие счёта, эквайринг, платежи, кредиты, налоги в один клик и индивидуальные условия";

  constructor() { }

  ngOnInit(): void {
  }

}
