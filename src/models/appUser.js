export default class AppUser{

    constructor({id = 0, fullname = "", token = "", image = "", roles = []}){
        this.id = id;
        this.fullname = fullname;
        this.token = token;
        this.image = image;
        this.roles = roles;
    }

    get isAdmin(){
        return this.roles.includes(Roles.Admin);
    }

    get isStudent(){
        return this.roles.includes(Roles.Student);
    }
}

const Roles = {
    Student: 'Student',
    Admin: 'Admin'
}
