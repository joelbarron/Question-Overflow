import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [QuestionService]
})
export class QuestionListComponent implements OnInit {

  @Input() sort = '-createdAt';

  questions: Question[];
  loading = true;


  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService
      .getQuestions(this.sort)
      .then((response: Question[]) => {
        this.questions = response;
        this.loading = false;
      });
  }

}
