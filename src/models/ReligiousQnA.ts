import { ReligiousQuestion } from "./ReligiousQuestion";

export class ReligiousQnA {
  questionsAndAnswers: ReligiousQuestion[];

  constructor() {
    this.questionsAndAnswers = [];
  }

  addQuestion(question: string, answer: string) {
    const newQuestion = new ReligiousQuestion(question, answer);
    this.questionsAndAnswers.push(newQuestion);
  }

  getQuestions() {
    return this.questionsAndAnswers.map(qna => qna.question);
  }

  getAnswers() {
    return this.questionsAndAnswers.map(qna => qna.answer);
  }

  getQuestionByIndex(index: number) {
    return this.questionsAndAnswers[index]?.question;
  }

  getAnswerByIndex(index: number) {
    return this.questionsAndAnswers[index]?.answer;
  }

  getAnswerByQuestion(question: string) {
    const qna = this.questionsAndAnswers.find(qna => qna.question === question);
    return qna ? qna.answer : 'Question not found';
  }
}
