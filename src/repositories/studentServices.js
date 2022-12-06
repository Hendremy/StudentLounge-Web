import LessonFileRepository from "./lessonFileRepository";
import { LessonRepository } from "./lessonRepository";

export default class StudentServices {

    constructor({apiUrl, token}){
        this.apiUrl = apiUrl;
        this.token = token;
    }

    get lessonRepo(){
        return new LessonRepository(
            {
                apiUrl: this.apiUrl, 
                controller: 'Lesson', 
                token: this.token
            });
    }

    get lessonFileRepo(){
        return new LessonFileRepository({
            apiUrl: this.apiUrl,
            controller: 'LessonFile',
            token: this.token
        });
    }
}