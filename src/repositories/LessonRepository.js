import Lesson from "../models/lesson";
import { SecuredApiService } from "./apiService";

export class LessonRepository extends SecuredApiService{

    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller, token: token});
    }

    async getLessonInfo({id}){
        const url = `${super.baseUrl}/${id}`;
        return await fetch(url, {
            method: "GET",
            mode: "cors",
            headers: super.jsonHeaders
        })
        .then(response => {
            if (!response.ok) {
                return new Error();
            }
            return response;
        })
        .then(response => {
            return response.json();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    async getUserLessons(){
        return await fetch(super.baseUrl, {
            method: "GET",
            mode: "cors",
            headers: this.headers
        })
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response;
        })
        .then(response => {
            return response.json();
        })
        .then(lessonArray =>{
            let lessons = [];
            lessonArray.array.forEach(jlesson => {
                lessons.push(Object.assign(new Lesson(), jlesson));
            });
            return lessons;
        });
    }

    async joinlesson(){

    }

    async leaveLesson(){

    }

 
}