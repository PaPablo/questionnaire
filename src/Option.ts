import { IQuestion } from "./Question";

interface IOption {
  title: string;
  nextQuestion: IQuestion | null;
}

class Option implements IOption {
  title: string;
  nextQuestion: IQuestion | null;

  constructor(title: string, nextQuestion: IQuestion | null) {
    this.title = title;
    this.nextQuestion = nextQuestion;
  }
}

export { IOption, Option };
