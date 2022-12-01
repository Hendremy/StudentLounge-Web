export async function CreateAccount({email, password, firstname, lastname, confirmPassword}) {
    const url = "https://porthos-intra.cg.helmo.be/e190449/Auth/Register";
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

export async function ConnectByGoogle(token) {
    const url = "https://porthos-intra.cg.helmo.be/e190449/Auth/External";
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

export async function GetAccount({email, password}) {
    const url = "https://porthos-intra.cg.helmo.be/e190449/Auth/Login";
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