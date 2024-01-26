import {ChangeEvent, Fragment, useState} from 'react'
import './App.css'
import {Button, Stack, TextField} from "@mui/material";

function App() {
    const [localDate, setLocalDate] = useState<string>('');

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setLocalDate(event.target.value);
    }

    const onSubmitHandler = () => {
        console.log(localDate);
    }


    return (
        <Fragment>
            <Stack direction={"column"} spacing={4}>
                <TextField
                    value={localDate}
                    variant={"outlined"}
                    type={"date"}
                    fullWidth={true}
                    onChange={onChangeHandler}
                />

                <Button variant={"outlined"}
                        type={"button"}
                        color={"primary"}
                        onClick={onSubmitHandler}
                >submit</Button>

            </Stack>
        </Fragment>
    )
}

export default App
