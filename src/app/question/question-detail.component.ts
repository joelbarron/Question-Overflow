import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from './question.model';
import { QuestionService } from './question.service';


@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [QuestionService]
})
export class QuestionDetailComponent implements OnInit, OnDestroy {

  question?: Question;
  loading = true;
  sub: any;

  constructor(private questionService: QuestionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // hacer el llamado
      this.questionService
      .getQuestion(params.id)
      .then((response: Question) => {
        this.question = response;
        this.loading = false;
      });
      // termina el llamado
    });
  }

  ngOnDestroy() {
    // des suscribirnos para liberar recursos
    this.sub.unsubscribe();
  }

}
