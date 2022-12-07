import { ApiService } from "./apiService";

export default class CountRepository extends ApiService{
    constructor({apiUrl, controller}){
        super({apiUrl: apiUrl, controller: controller});
    }

    async getUserCount(){
        const url = `${this.baseUrl}/users`;
        return fetch(url)
            .then(response => this._handleJsonResponse(response));
    }

    async getFileCount(){
        const url = `${this.baseUrl}/files`;
        return fetch(url)
            .then(response => this._handleJsonResponse(response));
    }
}