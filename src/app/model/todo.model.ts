export interface ITodo{
    id:number ,
    task: string | undefined,
    timeRequired: string | undefined,
    priority: string | undefined,
    status:string | undefined
    isEditing:boolean | undefined
}

export const states = 'states';