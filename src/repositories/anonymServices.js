import AuthenticationRepository from "./authenticationRepository";
import CountRepository from './countRepository';

export default class AnonymServices {

    constructor({apiUrl}){
        this.apiUrl = apiUrl;
    }

    get authenticationRepository(){
        return new AuthenticationRepository(
            {
                apiUrl: this.apiUrl,
                controller: 'Auth'
            }
        );
    }

    get countRepository(){
        return new CountRepository(
            {
                apiUrl: this.apiUrl,
                controller: 'Count'
            }
        );
    }
}