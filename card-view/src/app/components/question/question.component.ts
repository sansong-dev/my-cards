import {Component, DoCheck, EventEmitter, Input, OnInit, Output, SimpleChanges} from "@angular/core";
import {questions} from "../../questions";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit, DoCheck {
  questions: any[];
  @Input() questionIndex: number;
  currentQuestion: string;
  userAnswer: string;
  correctAnswer: string;
  currentOptions: string[];
  isChecked: boolean;

  ngOnInit(): void {
    this.questions = questions;
  }

  ngDoCheck(): void {
    this.currentQuestion = this.questions[this.questionIndex].question;
    this.currentOptions = this.questions[this.questionIndex].options;
  }

  @Output() disable = new EventEmitter<boolean>();

  @Output() answers = new EventEmitter<{ user_answer: string, correct_answer: string }>();

  @Output() totalQuestions = new EventEmitter<number>();



  setUserAnswer(option: string) {
    this.userAnswer = option;
    this.correctAnswer = this.questions[this.questionIndex].answer;
    this.answers.emit({user_answer: this.userAnswer, correct_answer: this.correctAnswer});
    this.totalQuestions.emit(this.questions.length);
  }

  enableNextButton($event: Event) {
    this.userAnswer = undefined;
    this.disable.emit(false);
   // this.isChecked = false
  }
}
