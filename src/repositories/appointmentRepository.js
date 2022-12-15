import { SecuredApiService } from "./apiService";

export default class AppointmentRepository extends SecuredApiService{

    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller, token: token});
    }

    
}