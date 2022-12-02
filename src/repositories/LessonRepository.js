import Lesson from "../models/lesson";

export class LessonRepository {

    constructor(userToken){
        this.userToken = userToken;
        this.baseUrl = "https://porthos-intra.cg.helmo.be/e190449/Lesson";
        this.headers = {
            'Authorization': `Bearer ${this.userToken}`,
            'Content-Type': 'application/json'
        };
    }

    async getLessonInfo({id}){
        const url = `${baseUrl}/${id}`;
        return await fetch(url, {
            method: "GET",
            mode: "cors",
            headers: this.headers
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
        return await fetch(url, {
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