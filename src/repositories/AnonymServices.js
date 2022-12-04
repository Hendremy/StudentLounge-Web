import AuthenticationRepository from "./AuthenticationRepository";
import StatsRepository from "./StatsRepository";

class AnonymServices{

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