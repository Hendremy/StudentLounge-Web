import {atomWithStorage} from "jotai/utils";
import {atom} from 'jotai';

// Stockage d'un utilisateur enregistré.
export const userAtom = atomWithStorage('user', null);
export const lessonsAtom = atom([]);
export const chatAtom = atom([]);
export const tutoringsAtom = atom([]);
export const appointmentsAtom = atom([]);
export const agendasAtom = atom([]);
export const selectedLessonAtom = atomWithStorage('selectedLesson',null);
export const selectedChatAtom = atom('selectedChat',null);

