import AuthenticationRepository from "./authenticationRepository";
import StatsRepository from "./statsRepository";

export default class AnonymServices {

    constructor({baseUrl}){
        this.baseUrl = baseUrl;
    }

    get authenticationRepository(){
        return new AuthenticationRepository(
            {
                baseUrl: this.baseUrl,
                controller: 'Auth'
            }
        );
    }

    get statsRepository(){
        return new StatsRepository(
            {
                baseUrl: this.baseUrl,
                controller: 'Stats'
            }
        );
    }
}