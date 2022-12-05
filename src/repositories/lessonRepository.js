import Lesson from "../models/lesson";
import { SecuredApiService } from "./apiService";

export class LessonRepository extends SecuredApiService{

    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller, token: token});
    }

    async getUserLessons(){
        return await fetch(super.baseUrl, {
            method: "GET",
            mode: "cors",
            headers: this.headers
        })
        .then(response => this._handleHttpResponse(response))
        .then(lessonArray =>{
            let lessons = [];
            lessonArray.array.forEach(jlesson => {
                lessons.push(new Lesson(jlesson));
            });
            return lessons;
        });
    }

    async joinlesson(){

    }

    async leaveLesson(){

    }


    _reviveLesson(jlesson){
        return Lesson(jlesson);
    }
}