import { SecuredApiService } from "./apiService";
import Appointment from "../models/appointment";

export default class AppointmentsRepository extends SecuredApiService{

    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller, token: token});
    }

    async makeAppointment(appointmentRequest){
        const url = this.baseUrl;
        const data = JSON.stringify(appointmentRequest);
        return fetch(url, {
            method: 'POST',
            body: data,
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response))
        .then(jappointment => this._reviveAppointment(jappointment));
    }

    async getAppointments(){
        const url = this.baseUrl;
        return fetch(url, {
            method: 'GET',
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response))
        .then(jappointment => this._reviveAppointmentArray(jappointment));
    }

    _reviveAppointmentArray(jappointmentArray){
        return jappointmentArray.map(jappointment => this._reviveAppointment(jappointment));
    }

    _reviveAppointment(jappointment){
        return new Appointment(jappointment);
    }
}