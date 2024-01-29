


export type UserProps = {
    id : string,
    email : string,
    role: string,
    password: string,
   }


export type UserActionProps = {
    type: 'find'| 'add' |'delete' | 'update',
}
