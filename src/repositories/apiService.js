export class ApiService{

    constructor({apiUrl, controller}){
        this.apiUrl = apiUrl;
        this.controller = controller;
    }

    get baseUrl () {
        return `${this.apiUrl}/${this.controller}`;
    }

    get jsonHeader (){
        return {
            'Content-Type' : 'application/json'
        }
    }

    async _handleJsonResponse(response){
        if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText}`);
        }
        return await response.json();
    }
}

export class SecuredApiService extends ApiService{

    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller});
        this.token = token;
    }

    get tokenBearer () {
        return `Bearer ${this.token}`;
    }

    get bearerHeader(){
        return {
            'Authorization' : this.tokenBearer
        };
    }

    get jsonHeaders(){
        return {
            'Content-Type' : 'application/json',
            'Auhtorization' : this.tokenBearer
        }
    }
}

