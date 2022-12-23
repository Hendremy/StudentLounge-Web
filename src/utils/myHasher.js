import hash from "hash.js";

function hashString(string){
    return hash.sha256().update(string).digest('hex');
}

export {hashString}