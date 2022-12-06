import Lesson from "../models/lesson";
import { SecuredApiService } from "./apiService";

export class LessonRepository extends SecuredApiService{

    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller, token: token});
    }

    async getUserLessons(){
        return fetch(super.baseUrl, {
            method: "GET",
            mode: "cors",
            headers: this.bearerHeader
        })
        .then(response => this._handleHttpResponse(response))
        .then(lessonArray =>{
            let lessons = [];
            lessonArray.forEach(jlesson => {
                lessons.push(this._reviveLesson(jlesson));
            });
            return lessons;
        });
    }

    async getAllLessons(){
        return fetch(super.baseUrl + '/all', {
            method: "GET",
            mode: "cors",
            headers: this.bearerHeader
        })
        .then(response => this._handleHttpResponse(response))
        .then(lessonArray =>{
            let lessons = [];
            lessonArray.forEach(jlesson => {
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