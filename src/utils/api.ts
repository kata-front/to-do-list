import type { Task } from "./types";

export const Api = {
    getTaskFromStorage: (): Task[] => {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    },

    saveTaskToStore: (newTask: Task): void => {
        localStorage.setItem('tasks', JSON.stringify([...Api.getTaskFromStorage(), newTask]));
    }
}