import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {
  currentIndex = 0;
  public answers: any;
  public score = 0;
  public totalQuestions: number;
  public quizOver: boolean;
  public isDisableNext=true;

  ngOnInit(): void {
  }

  goNext() {
    this.currentIndex++;
    this.updateScore();
    this.isDisableNext = true

    if (this.currentIndex === this.totalQuestions) {
      this.endQuiz();
    }
  }

  goPrevious() {
    this.currentIndex--;
  }

  receiveAnswers(receivedAnswers) {
    this.answers = receivedAnswers;
  }

  updateScore() {
    if (this.answers.user_answer === this.answers.correct_answer) {
      this.score++;
    }
  }

  getTotalQuestions(totalQuestions: number) {
    this.totalQuestions = totalQuestions;
  }

  endQuiz() {
    this.quizOver = true;
    alert('Quiz Over! Score is ' + this.score + '/ ' + this.totalQuestions);
  }

  restartQuiz() {
    this.quizOver = false;
    this.score = 0;
    this.currentIndex = 0;
  }

  disableNext($event: boolean) {
    this.isDisableNext = $event.valueOf()
  }
}
