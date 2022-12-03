export default class AppUser{
    constructor({id, fullname, token, image, roles}){
        this.id = id;
        this.fullname = fullname;
        this.token = token;
        this.image = image;
        this.roles = roles;
    }
}