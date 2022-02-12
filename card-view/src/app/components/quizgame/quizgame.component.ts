import {Component} from '@angular/core';
import {quizQuestions} from "../../quizQuestions";

@Component({
  selector: 'app-quizgame',
  templateUrl: './quizgame.component.html',
  styleUrls: ['./quizgame.component.scss']
})
export class QuizGameComponent {
  questions: any;
  currentIndex: number;
  notAttempted: any;
  correct: any;
  currentQuestionSet: any;
  start = false;
  gameover = false;
  buttonname = "Start Quiz";

  constructor() {

    //Creating summy questions Json dta
    this.questions = quizQuestions;

    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }

  next() {
    this.currentIndex = this.currentIndex + 1;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }

  previous() {
    this.currentIndex = this.currentIndex - 1;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }

  submit() {
    this.buttonname = "Replay";
    if (this.currentIndex + 1 == this.questions.length) {
      this.gameover = true;
      this.start = false;
      this.correct = 0;
      this.notAttempted = 0;
      this.questions.map(x => {
        if (x.selected != 0) {
          if (x.selected == x.answer)
            this.correct = this.correct + 1;
        } else {
          this.notAttempted = this.notAttempted + 1;
        }
        x.selected = 0;
      });
    }


  }

  startQuiz() {
    this.gameover = false;
    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
    this.start = true;
  }

  isPrevDisabled() {
    return (this.currentIndex + 1) <= 1
  }

  isNextDisplayed() {
    return !(this.currentIndex + 1 == this.questions.length)

  }
  isNextDisabled() {
     return this.questions[this.currentIndex].selected ===0
  }

  isSubmitDisabled() {
    return this.questions[this.currentIndex].selected ===0
  }
}

export class QuizGame {
}
