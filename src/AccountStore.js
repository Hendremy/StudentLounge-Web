import {atomWithStorage} from "jotai/utils";

// Stockage d'un utilisateur enregistré.
export const connectedUser = atomWithStorage('user', null);

