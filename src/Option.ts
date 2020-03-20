import { IQuestion, Question } from "./Question";

interface IOption {
  title: string;
  nextQuestion: IQuestion | null;
}

class Option implements IOption {
  static fromDocument(document: any) {
    const { title, nextQuestion } = document;
    let obj = new Option(title, Question.fromDocument(nextQuestion));
    return obj;
  }

  title: string;
  nextQuestion: IQuestion | null;

  constructor(title: string, nextQuestion: IQuestion | null) {
    this.title = title;
    this.nextQuestion = nextQuestion;
  }
}

export { IOption, Option };
