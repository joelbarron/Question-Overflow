import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { Question } from '../question/question.model';
import { User } from '../auth/user.model';
import { QuestionService } from '../question/question.service';
import SweetScroll from 'sweet-scroll';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [QuestionService]
})
export class AnswerFormComponent implements OnInit {

  @Input()
  question: Question;
  sweetScroll: SweetScroll;

  constructor(
    private questionService: QuestionService,
    private authService: AuthService,
    private router: Router
  ) {
    this.sweetScroll = new SweetScroll();
   }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {

    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/signin');
    }

    const answer = new Answer(
      form.value.description,
      this.question
    );

    this.questionService.addAnswer(answer)
      .subscribe(
        a => {
          this.question.answers.unshift(a);
          this.sweetScroll.to('#title');
        },
        this.authService.handleError
      );

    form.reset();
  }

}
