import LessonFile from "../models/lessonFile";
import { SecuredApiService } from "./apiService";

export default class LessonFileRepository extends SecuredApiService {

    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller, token: token});
    }

    async getLessonFiles({lessonId}){
        const url = `${this.baseUrl}/lesson/${lessonId}`;
        return fetch(url, {
            method: "GET",
            mode: "cors",
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response))
        .then(lessonFileArray =>{
            let lessonFiles = [];
            lessonFileArray.forEach(jlessonFile => {
                lessonFiles.push(this._reviveLessonFile(jlessonFile));
            });
            return lessonFiles;
        });
    }

    async uploadFile({formData}){
        const url = `${this.baseUrl}`
        return fetch(url,{
            method: "POST",
            mode:'cors',
            body: formData,
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response))
    }

    getDownloadUrl({lessonFileId}){
        return `${this.baseUrl}/${lessonFileId}`;
    }

    _reviveLessonFile(jlessonFile){
        return new LessonFile(jlessonFile);
    }
}