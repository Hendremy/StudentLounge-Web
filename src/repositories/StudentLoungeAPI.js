const baseUrl = "https://porthos-intra.cg.helmo.be/e190449";

export async function createAccount({email, password, firstname, lastname, confirmPassword}) {
    const url = `${baseUrl}/Auth/Register`;
    const data = JSON.stringify({email: email, password: password, firstname:firstname, lastname:lastname, passwordRep:confirmPassword});

    return await fetch(url, {
        method: "POST",
        body: data,
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

export async function connectByGoogle(token) {
    const url = `${baseUrl}/Auth/External`;
    const data = JSON.stringify({providerName: "Google", token: token});
    return await fetch(url, {
        method: "POST",
        body: data,
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                console.log(response);
                throw new Error(response);
            }
            return response;
        })
        .then(response => {
            return response.json()
        })
}

export async function getAccount({email, password}) {
    const url = `${baseUrl}/Auth/Login`;
    const data = JSON.stringify({username: email, password: password});

    return await fetch(url, {
        method: "POST",
        body: data,
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

export async function getNbFiles() {
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