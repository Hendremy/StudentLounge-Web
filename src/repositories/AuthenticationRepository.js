import AppUser from "../models/appUser";
import {ApiService} from "./ApiService";

export default class AuthenticationRepository extends ApiService{

    constructor({apiUrl}){
        super({apiUrl: apiUrl, controller: 'Auth'});
    }

    async createAccount({email, password, firstname, lastname, confirmPassword}) {
        const url = `${super.baseUrl}/Register`;
        const data = JSON.stringify({email: email, password: password, firstname:firstname, lastname:lastname, passwordRep:confirmPassword});
    
        return await fetch(url, {
            method: "POST",
            body: data,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return super._handleHttpResponse(response);
        })
        .then(jsonBody => {
            return this._reviveAppUser(jsonBody);
        });
    }
    
    async connectByGoogle(token) {
        const url = `${super.baseUrl}/External`;
        const data = JSON.stringify({providerName: "Google", token: token});
        return await fetch(url, {
            method: "POST",
            body: data,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return super._handleHttpResponse(response);
        })
        .then(jsonBody => {
            return this._reviveAppUser(jsonBody);
        });
    }
    
    async getAccount({email, password}) {
        const url = `${super.baseUrl}/Login`;
        const data = JSON.stringify({username: email, password: password});
    
        return await fetch(url, {
            method: "POST",
            body: data,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return super._handleHttpResponse(response);
        })
        .then(jsonBody => {
            return this._reviveAppUser(jsonBody);
        });
    }

    _reviveAppUser(jsonUser){
        return Object.assign(new AppUser(), jsonUser);
    }
}