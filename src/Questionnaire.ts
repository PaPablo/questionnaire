import yaml from "js-yaml";
import fs from "graceful-fs";
import { IQuestion } from "./Question";

class Questioannaire {
  version: string;

  firstQuestion?: IQuestion;
  currentQuestion: IQuestion | null;

  answers: IAnswer[];

  constructor(version: string) {
    this.version = version;
    this.answers = [];
    this.currentQuestion = null;
  }

  public answerQuestion(optionNumber: number) {
    // If the current question exists
    if (this.currentQuestion) {
      const currentQuestionAnswer = this.currentQuestion!.pickOption(
        optionNumber
      );

      this.answers = [...this.answers, currentQuestionAnswer];
    }

    this.currentQuestion = this.currentQuestion!.nextQuestion(optionNumber);
  }

  public loadFromObject(document: object) {}
}
