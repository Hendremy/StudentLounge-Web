import AppUser from "../models/appUser";
import {ApiService} from "./apiService";

export default class AuthenticationRepository extends ApiService{

    constructor({apiUrl, controller}){
        super({apiUrl: apiUrl, controller: controller});
    }

    async register({email, password, firstname, lastname, confirmPassword}) {
        const url = `${super.baseUrl}/Register`;
        const data = JSON.stringify({email: email, password: password, firstname:firstname, lastname:lastname, passwordRep:confirmPassword});
    
        return fetch(url, {
            method: "POST",
            body: data,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return this._handleHttpResponse(response);
        })
        .then(jsonBody => {
            return this._reviveAppUser(jsonBody);
        });
    }
    
    async googleLogin(token) {
        const url = `${super.baseUrl}/External`;
        const data = JSON.stringify({providerName: "Google", token: token});
        return fetch(url, {
            method: "POST",
            body: data,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return this._handleHttpResponse(response);
        })
        .then(jsonBody => {
            return this._reviveAppUser(jsonBody);
        });
    }
    
    async login({email, password}) {
        const url = `${super.baseUrl}/Login`;
        const data = JSON.stringify({username: email, password: password});
    
        return fetch(url, {
            method: "POST",
            body: data,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return this._handleHttpResponse(response);
        })
        .then(jsonBody => {
            return this._reviveAppUser(jsonBody);
        });
    }

    _reviveAppUser(juser){
        return new AppUser(juser);
    }
}