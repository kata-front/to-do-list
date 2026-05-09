import type { Task } from "./types";

export const Api = {
    getTaskFromStorage: (): Task[] => {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    },


    saveTasksToStorage: (tasks: Task[]): void => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },

    saveTaskToStore: (newTask: Task): void => {
        localStorage.setItem('tasks', JSON.stringify([...Api.getTaskFromStorage(), newTask]));
    },

    changeTaskSuccessing: (id: number): void => {
        const tasks = Api.getTaskFromStorage();

        tasks.map(task => {
            task.id === id 
                ? task.completed = !task.completed
                : task
        })

        Api.saveTasksToStorage(tasks);
    }
}