import { ApiService } from "./ApiService"

export default class StatsRepository extends ApiService{

    constructor({baseUrl, controller}){
        super({baseUrl: baseUrl, controller: controller})
    }

    async getNbFiles() {
        const url = "https://porthos-intra.cg.helmo.be/e190449/LessonFile/files";
    
        return await fetch(url)
            .then(response => {
                if (!response.ok) {
                    return new Error();
                }
                return response;
            })
            .then(response => {
                return response.json()
            })
            .catch((error) => {
                console.log(error)
            });
    }
}