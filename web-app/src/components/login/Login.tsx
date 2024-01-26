import {Box, Button, Card, Container, Stack, TextField} from "@mui/material";
import {ChangeEvent, useState} from "react";


const Login =() =>{

    const [localDate, setLocalDate] = useState<string>('');

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setLocalDate(event.target.value);
    }

    const onSubmitHandler = () => {
        console.log(localDate);
    }

    return (
        <Box>
            <Container maxWidth={"sm"}>
                <Card variant={"outlined"} >

                </Card>
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
            </Container>
        </Box>
    )

}


export default Login;