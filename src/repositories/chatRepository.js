import Chat from "../models/chat";
import { SecuredApiService } from "./apiService";

export default class ChatRepository extends SecuredApiService {

    constructor({apiUrl, controller, token}){
        super({apiUrl: apiUrl, controller: controller, token: token});
    }

    async getChat(){
        return fetch(this.baseUrl, {
            method: "GET",
            mode: "cors",
            headers: this.bearerHeader
        })
        .then(response => this._handleJsonResponse(response))
        .then(chatArray => this._reviveChatArray(chatArray));
    }

    _reviveChatArray(jChatArray){
        return jChatArray.map(
            jChat => this._reviveChat(jChat));
    }

    _reviveChat(jChat){
        return new Chat(jChat);
    }
}