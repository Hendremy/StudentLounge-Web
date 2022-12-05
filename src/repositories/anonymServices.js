import AuthenticationRepository from "./authenticationRepository";
import StatsRepository from "./statsRepository";

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

    get statsRepository(){
        return new StatsRepository(
            {
                apiUrl: this.apiUrl,
                controller: 'Stats'
            }
        );
    }
}