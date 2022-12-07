import { SecuredApiService } from "./apiService";


export default class TutoringRepository extends SecuredApiService{
    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller, token: token});
    }

    async getAllRequests(){

    }

    async askTutoring({lessonId}){

    }

    async acceptTutoringRequest({tutoringId}){

    }
}