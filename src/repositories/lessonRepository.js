import Lesson from "../models/lesson";
import { SecuredApiService } from "./apiService";

export class LessonRepository extends SecuredApiService{

    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller, token: token});
    }

    async getUserLessons(){
        return fetch(this.baseUrl, {
            method: "GET",
            mode: "cors",
            headers: this.bearerHeader
        })
        .then(response => this._handleHttpResponse(response))
        .then(lessonArray => this._reviveLessonArray(lessonArray));
    }

    async getAllLessons(){
        return fetch(this.baseUrl + '/all', {
            method: "GET",
            mode: "cors",
            headers: this.bearerHeader
        })
        .then(response => this._handleHttpResponse(response))
        .then(lessonArray => this._reviveLessonArray(lessonArray));
    }

    async joinlesson({lessonId}){
        const url = `${this.baseUrl}/${lessonId}`;
        return fetch(url,{
            method:'PUT',
            mode: 'cors',
            headers: this.bearerHeader
        })
        .then(response => this._handleHttpResponse(response))
        .then(lesson => this._reviveLesson(lesson));
    }

    async leaveLesson({lessonId}){
        const url = `${this.baseUrl}/${lessonId}`;
        return fetch(url,{
            method:'DELETE',
            mode: 'cors',
            headers: this.bearerHeader
        })
        .then(response => this._handleHttpResponse(response))
        .then(lesson => this._reviveLesson(lesson));
    }

    _reviveLesson(jlesson){
        return new Lesson(jlesson);
    }

    _reviveLessonArray(jlessonArray){
        return jlessonArray.map(
            jlesson => this._reviveLesson(jlesson));
    }
}