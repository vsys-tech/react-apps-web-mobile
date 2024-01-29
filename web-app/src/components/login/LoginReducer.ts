import {AllActionProps, LoginInputProps} from "../../types/LoginInput.type.ts";
import axios from 'axios'

export const loginReducer = (state: LoginInputProps, action: AllActionProps) => {
    switch (action.type) {
        case "add" : {
            state = action.payLoad;
            axios.post("http://localhost:8080/add",
                JSON.stringify(action.payLoad), {
                    headers: {
                        'Context-Type': "text/plain"
                    }
                })
                .then(response => {
                    response.data
                })
                .catch(reason => {
                    console.log(reason)
                })
                .finally(() => {
                    console.log("")
                    ''
                })
            return state;
        }
        case "delete":
            return state;
        case "find":
            return state;
        case "update":
            return state;
        default :
            return state;
    }
}

