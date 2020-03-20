import yaml from "js-yaml";
import fs from "graceful-fs";
import { IQuestion, Question } from "./Question";

class Questionnaire {
  version: string;

  firstQuestion?: IQuestion;
  currentQuestion: IQuestion | null;

  answers: IAnswer[];

  static fromDocument(document: any) {
    const { version, firstQuestion } = document;

    const obj = new Questionnaire(version);
    obj.setFirstQuestion(Question.fromDocument(firstQuestion));
    return obj;
  }
  setFirstQuestion(question: Question) {
    this.firstQuestion = question;
    this.currentQuestion = this.firstQuestion;
  }

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
}

export { Questionnaire };
