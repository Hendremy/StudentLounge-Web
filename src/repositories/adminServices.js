import AuthenticationRepository from "./authenticationRepository";
import UsersRepository from "./usersRepository"

export default class AdminServices {

    constructor({apiUrl, token}){
        this.apiUrl = apiUrl;
        this.token = token;
    }

    get usersRepository(){
        return new UsersRepository(
            {
                apiUrl: this.apiUrl, 
                controller: 'Users', 
                token: this.token
            });
    }

    get authRepository(){
        return new AuthenticationRepository({
            apiUrl: this.apiUrl,
            controller: 'Auth'
        });
    }
}