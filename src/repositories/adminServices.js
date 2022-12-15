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
}