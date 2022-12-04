import { LessonRepository } from "./LessonRepository";

class StudentServices {

    constructor({baseUrl, token}){
        this.baseUrl = baseUrl;
        this.token = token;
    }

    get lessonRepo(){
        return new LessonRepository(
            {
                baseUrl: this.baseUrl, 
                controller: 'Lesson', 
                token: token
            });
    }
}