const baseUrl = "https://porthos-intra.cg.helmo.be/e190449/Lesson";

export async function getLessonInfo({id}){
    const url = `${baseUrl}/Lesson/${id}`;

    return await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    })
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

export async function getUserLesson(){

}

export async function joinlesson(){

}

export async function leaveLesson(){

}