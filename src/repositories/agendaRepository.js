import { SecuredApiService } from "./apiService";
import Agenda from "../models/agenda";
import AgendaEvent from "../models/agendaEvent";

export default class AgendaRepository extends SecuredApiService {

    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller, token: token});
    }

    async getUserAgendas(){
        const url = this.baseUrl;
        return fetch(url,{
            method: 'GET',
            mode: 'cors',
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response))
        .then(jsonAgendas => this._reviveAgendas(jsonAgendas));
    }

    async uploadCalendarFile({formData}){
        const url = this.baseUrl;
        return fetch(url,{
            method: "POST",
            mode:'cors',
            body: formData,
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response))
        .then(jsonAgendas => this._reviveAgendas(jsonAgendas));
    }

    _reviveAgendas({jsonAgendas}){
        return jsonAgendas.map(jAgenda => this._reviveAgenda(jAgenda)
        );
    }

    _reviveAgenda({jsonAgenda}){
        var events = jsonAgenda.agendaEvents.map(jEvent => new AgendaEvent(jEvent));
        return Agenda({id: jsonAgenda.id, name: jsonAgenda.name, agendaEvents: events});
    }
}