import Tutoring from "../models/tutoring";
import ValidatedTutoring from "../models/validatedTutoring";
import { SecuredApiService } from "./apiService";
import TutoringRequest from "../models/tutoringRequest";


export default class TutoringRepository extends SecuredApiService{
    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller, token: token});
    }

    async getTutoringRequestStatus({lessonId}){
        const url = `${this.baseUrl}/lesson/${lessonId}`;
        return fetch(url,{
            method: 'GET',
            mode: 'cors',
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response))
        .catch(error => null)
        .then(jtutoringArray => this._reviveTutoringRequest(jtutoringArray));
    }

    async getUserValidatedTutorings(){
        const url = `${this.baseUrl}`;
        return fetch(url,{
            method: 'GET',
            mode: 'cors',
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response))
        .then(jtutoringArray => this._reviveValidatedTutoringArray(jtutoringArray));
    }

    async getAllRequestsOfLesson({lessonId}){
        const url = `${this.baseUrl}/lesson/${lessonId}/all`;
        return fetch(url,{
            method: 'GET',
            mode: 'cors',
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response))
        .then(jrequestArray => this._reviveRequestArray(jrequestArray));
    }

    async askTutoring({lessonId}){
        const url = `${this.baseUrl}/lesson/${lessonId}`;
        return fetch(url,{
            method: 'POST',
            mode: 'cors',
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response));
    }

    async acceptRequest({tutoringId}){
        const url = `${this.baseUrl}/${tutoringId}`;
        return fetch(url,{
            method: 'PUT',
            mode: 'cors',
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response));
    }

    _reviveRequestArray(jrequestArray){
        return jrequestArray.map(jrequest => this._reviveRequest(jrequest));
    }

    _reviveRequest(jrequest){
        return new Tutoring(jrequest);
    }

    _reviveValidatedTutoringArray(jtutoringArray){
        return jtutoringArray.map(jtutoring => this._reviveValidatedTutoring(jtutoring));
    }

    _reviveValidatedTutoring(jtutoring){
        return new ValidatedTutoring(jtutoring);
    }

    _reviveTutoringRequest(jrequest){
        return !jrequest ? null : new TutoringRequest(jrequest);
    }
}