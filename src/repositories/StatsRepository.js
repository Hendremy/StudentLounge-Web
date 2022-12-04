import { ApiService } from "./apiService"

export default class StatsRepository extends ApiService{

    constructor({apiUrl, controller}){
        super({apiUrl: apiUrl, controller: controller})
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