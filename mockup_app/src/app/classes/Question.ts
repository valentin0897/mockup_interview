export class Question{
    id: number;
    question: string;

    constructor(id: number, question: string){
        this.id = id
        this.question = question
    }
}

export class PostQuestion{
    question: string = "";
    tagId: number = 0

    constructor(tagId: number, question: string){
        this.tagId = tagId
        this.question = question
    }
}