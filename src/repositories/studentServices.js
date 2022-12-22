import AgendaRepository from "./agendaRepository";
import ChatRepository from "./chatRepository";
import LessonFileRepository from "./lessonFileRepository";
import LessonRepository from "./lessonRepository";
import TutoringRepository from "./tutoringRepository";
import AppointmentsRepository from "./appointmentsRepository";

export default class StudentServices {

    constructor({apiUrl, token}){
        this.apiUrl = apiUrl;
        this.token = token;
    }

    get lessonRepository(){
        return new LessonRepository(
            {
                apiUrl: this.apiUrl, 
                controller: 'Lessons', 
                token: this.token
            });
    }

    get lessonFileRepository(){
        return new LessonFileRepository({
            apiUrl: this.apiUrl,
            controller: 'LessonFiles',
            token: this.token
        });
    }

    get tutoringRepository(){
        return new TutoringRepository({
            apiUrl: this.apiUrl,
            controller: 'Tutorings',
            token: this.token
        });
    }

    get chatRepository(){
        return new ChatRepository({
            apiUrl: this.apiUrl,
            controller: 'Chat',
            token: this.token
        });
    }

    get agendaRepository(){
        return new AgendaRepository({
            apiUrl: this.apiUrl,
            controller: 'Agendas',
            token: this.token
        });
    }

    get appointmentRepository(){
        return new AppointmentsRepository({
            apiUrl: this.apiUrl,
            controller: 'Appointments',
            token: this.token
        });
    }
}