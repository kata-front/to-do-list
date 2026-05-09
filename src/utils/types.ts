export type Task = {
    id: number,
    title: string,
    completed: boolean,
    createdAt: string
}

export type CountersState = Record<string, number>;