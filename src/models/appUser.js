import roles from './roles';

export default class AppUser{

    constructor({id = 0, fullname = "", token = "", image = "", roles = [], firstname = "", lastname = "", username = "", fromGoogle = false, isLockout = false}){
        this.id = id;
        this.fullname = fullname;
        this.token = token;
        this.image = image;
        this.roles = roles;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.fromGoogle = fromGoogle;
        this.isLockout = isLockout;
    }

    get isAdmin(){
        return this.roles.includes(roles.admin);
    }

    get isStudent(){
        return this.roles.includes(roles.student);
    }
}