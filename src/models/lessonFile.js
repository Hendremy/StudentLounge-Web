export default class LessonFile{
    constructor({id, type, name, user, date}){
        this.id = id;
        this.type = type;
        this.name = name;
        this.user = user;
        this.date = date;
    }

    get isNotes(){
        return this.type == FileTypes.Notes;
    }
}

const FileTypes = {
    Summary : 0,
    Notes : 1
}