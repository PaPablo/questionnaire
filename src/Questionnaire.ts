import yaml from "js-yaml";
import fs from "graceful-fs";

interface IQuestion {
  // String array containing indications to the patient
  // Besides the text of the question itself
  indications: string[];

  // The question
  text: string;

  // Options to choose from
  options: IOption[];

  pickOption: { (optionNumber: number): IAnswer };
  nextQuestion: { (optionNumber: number): IQuestion };
}

interface IOption {
  title: string;
  nextQuestion: IQuestion;
}

interface IAnswer {
  // Copy question text here to prevent null references
  text: string;
  // What was answered
  // Option title or answer
  answer: string;

  // Next answer on Questioannaire
  nextAnswer: IAnswer;
}

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
