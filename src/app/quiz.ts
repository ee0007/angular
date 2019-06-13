export class Quiz {
    name:string;
    questions : Question[] =[];
    constructor(){}
}

export interface Question{
    label: string;
    answerA : string ;
    answerB : string ;
    answerC : string ;
    answerD : string ;
    correctAnswer : string ;
  }