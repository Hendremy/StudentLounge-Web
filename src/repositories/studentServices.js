import AgendaRepository from "./agendaRepository";
import ChatRepository from "./chatRepository";
import LessonFileRepository from "./lessonFileRepository";
import LessonRepository from "./lessonRepository";
import TutoringRepository from "./tutoringRepository";
import AppointmenRepository from "./appointmentRepository";

export default class StudentServices {

    constructor({apiUrl, token}){
        this.apiUrl = apiUrl;
        this.token = token;
    }

    get lessonRepository(){
        return new LessonRepository(
            {
                apiUrl: this.apiUrl, 
                controller: 'Lesson', 
                token: this.token
            });
    }

    get lessonFileRepository(){
        return new LessonFileRepository({
            apiUrl: this.apiUrl,
            controller: 'LessonFile',
            token: this.token
        });
    }

    get tutoringRepository(){
        return new TutoringRepository({
            apiUrl: this.apiUrl,
            controller: 'Tutoring',
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
            controller: 'Agenda',
            token: this.token
        });
    }

    get appointmentRepository(){
        return new AppointmenRepository({
            apiUrl: this.apiUrl,
            controller: 'Appointment',
            token: this.token
        });
    }
}