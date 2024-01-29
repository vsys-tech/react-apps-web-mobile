
export type LoginInputProps = {
    first: string,
    last: string,
    address: string,
    localDate: string,
    amount: number
}


export type AllActionProps = {
    type: 'find'| 'add' | 'update' | 'delete',
    payLoad: LoginInputProps
}


