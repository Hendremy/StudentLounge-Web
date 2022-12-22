import { SecuredApiService } from "./apiService";
import AppUser from "../models/appUser";


export default class UsersRepository extends SecuredApiService{
    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller, token: token});
    }

    async getUsers(){
        const url = `${this.baseUrl}`;
        return fetch(url,{
            method: 'GET',
            mode: 'cors',
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response))
        .then(jrequestArray => this._reviveRequestArray(jrequestArray));
    }

    async updateUser(newUser){
        const url = `${this.baseUrl}/${newUser.get('id')}`;
        const data = JSON.stringify({Firstname: newUser.get('firstname'), Lastname: newUser.get('lastname'), Password: newUser.get('password'), Username: newUser.get('username')});

        return fetch(url,{
            method: 'PUT',
            mode: 'cors',
            body: data,
            headers: this.jsonHeaders
        })
        .then(response => this._handleSimpleResponse(response))
    }

    async deleteUser(id){
        const url = `${this.baseUrl}/${id}`;

        return fetch(url,{
            method: 'DELETE',
            mode: 'cors',
            headers: this.bearerHeader
        })
        .then(response => this._handleSimpleResponse(response))
    }

    async lockoutUser(id){
        const url = `${this.baseUrl}/${id}`;

        return fetch(url,{
            method: 'POST',
            mode: 'cors',
            headers: this.bearerHeader
        })
        .then(response => this._handleSimpleResponse(response))
    }

    _reviveRequestArray(jrequestArray){
        return jrequestArray.map(jrequest => this._reviveRequest(jrequest));
    }

    _reviveRequest(jrequest){
        return new AppUser(jrequest);
    }
}