import { IOption } from "./Option";

interface IQuestion {
  // String array containing indications to the patient
  // Besides the text of the question itself
  indications: string[];

  // The question
  text: string;

  // Options to choose from
  options: IOption[];

  pickOption: { (optionNumber: number): IAnswer };
  nextQuestion: { (optionNumber: number): IQuestion | null };
}

class Question implements IQuestion {
  indications: string[];
  text: string;
  options: IOption[];
  constructor(indications: string[], text: string, options = []) {
    this.indications = indications;
    this.text = text;
    this.options = options;
  }

  pickOption(optionNumber: number): IAnswer {
    const pickedOption = this.options[optionNumber] as IOption;

    return new Answer(this.text, pickedOption.title, null);
  }

  nextQuestion(optionNumber: number): IQuestion | null {
    return this.options[optionNumber].nextQuestion;
  }
}

export { IQuestion, Question };
