import { IOption, Option } from "./Option";
import { Answer } from "./Answer";

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
  static fromDocument(document: any): Question {
    const {text, indications, options} = document

    let obj = new Question(
      text,
      indications,
      options?.map((o: any) => Option.fromDocument(o))
    );

    return obj;
  }

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

    const answer = new Answer(this.text, pickedOption.title, null)
    return answer;
  }

  nextQuestion(optionNumber: number): IQuestion | null {
    return this.options[optionNumber].nextQuestion;
  }
}

export { IQuestion, Question };
