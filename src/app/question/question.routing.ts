import { QuestionDetailComponent } from './question-detail.component';
import { QuestionFormComponent } from './question-form.component';
import { QuestionScreenComponent } from './question-screen.component';

export const QUESTION_ROUTES = [
  { path: '', component: QuestionScreenComponent },
  { path: 'new', component: QuestionFormComponent },
  { path: ':id', component: QuestionDetailComponent }
];

