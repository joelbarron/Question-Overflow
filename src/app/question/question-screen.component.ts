import { Component } from '@angular/core';


@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styles: [`
    .add-question {
      position: fixed !important;
      bottom: 30px;
      right: 30px;
      font-size: 24px;
    }

    .agregar {
      font-size: 30px !important;
    }
  `]
})
export class QuestionScreenComponent {

}
