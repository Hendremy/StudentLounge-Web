export class ApiService{

    constructor({apiUrl, controller}){
        this.apiUrl = apiUrl;
        this.controller = controller;
    }

    get baseUrl () {
        console.log("apiUrl");
        console.log(this.apiUrl);

        console.log("controller");
        console.log(this.controller);
        return `${this.apiUrl}/${this.controller}`;
    }

    get jsonHeader (){
        return {
            'Content-Type' : 'application/json'
        }
    }

    async _handleHttpResponse(response){
        if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText}`);
        }
        return response.json();
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

    get jsonHeaders(){
        return {
            'Content-Type' : 'application/json',
            'Auhtorization' : this.tokenBearer
        }
    }
}

