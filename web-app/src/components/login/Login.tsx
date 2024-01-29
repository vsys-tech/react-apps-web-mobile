import {Box, Button, Card, CardActions, CardContent, Container, Stack, TextField, Typography} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {LoginInputProps} from "../../types/LoginInput.type.ts";
import {loginReducer} from "./LoginReducer.ts";
import {useReducer} from "react";


const initialState = {
    address: '',
    first: '',
    last: '',
    amount: 0,
    localDate: '',
}


const Login = () => {

    const [state, dispatch] = useReducer(loginReducer, initialState);

    const onSubmit: SubmitHandler<LoginInputProps> = (formData) => {
        dispatch({type: 'add', payLoad: formData});
    }

    const {
        formState: {errors},
        register,
        control,
        handleSubmit,
    } = useForm<LoginInputProps>({
        defaultValues: state
    });


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card sx={{mt: 2}}>
                <Container maxWidth={"sm"} sx={{height: "60%", alignContent: "left"}}>
                    <CardContent>
                        <Box>
                            <Controller
                                name={"first"}
                                control={control}
                                render={
                                    ({field}) =>
                                        <TextField
                                            {...register("first", {required: true})}
                                            style={{width: "80%"}}
                                            sx={{mb: 2}}
                                            label={"first"}
                                            type={"text"}
                                            variant={"outlined"} {...field}  />}
                            />
                            {errors.first && <Typography color={"red"}>First Is Required </Typography>}
                        </Box>
                        <Box>
                            <Controller
                                name={"last"}
                                control={control}
                                render={({field}) =>
                                    <TextField
                                        {...register("last", {required: true})}
                                        sx={{mb: 2}}
                                        style={{width: "80%"}}
                                        label={"last"}
                                        type={"text"}
                                        variant={"outlined"} {...field}  />}
                            />
                            {errors.last && <Typography color={"red"}>Last Is Required </Typography>}
                        </Box>
                        <Box>
                            <Controller
                                name={"address"}
                                control={control}
                                render={({field}) =>
                                    <TextField
                                        {...register("address", {required: true})}
                                        label={"address"}
                                        style={{width: "80%"}}
                                        type={"text"}
                                        variant={"outlined"} {...field}  />}
                            />
                            {errors.address && <Typography color={"red"}>Address Is Required </Typography>}
                        </Box>
                        <Box>
                            <Controller
                                name={"amount"}
                                control={control}
                                render={({field}) =>
                                    <TextField
                                        {...register("amount", {required: true})}
                                        sx={{mt: 2, mb: 2}}
                                        style={{width: "80%"}}
                                        label={"amount"}
                                        type={"number"}
                                        variant={"outlined"} {...field}  />}
                            />
                            {errors.amount && <Typography color={"red"}>Amount Is Required </Typography>}
                        </Box>
                        <Box>
                            <Controller
                                name={"localDate"}
                                control={control}
                                render={({field}) =>
                                    <TextField
                                        {...register("localDate", {required: true})}
                                        sx={{mb: 2, mt: 2}}
                                        type={"date"}
                                        style={{width: "80%"}}
                                        variant={"outlined"} {...field}  />}
                            />
                            {errors.localDate && <Typography color={"red"}>Date Is Required </Typography>}
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Stack direction={"row"} sx={{mx: 1, mb: 4}}>
                            <Button variant={"contained"}
                                    type={"submit"}
                                    color={"primary"}
                            >submit</Button>
                            <Button variant={"contained"}
                                    type={"reset"}
                                    sx={{mx: 2}}
                                    color={"primary"}
                            >reset</Button>
                        </Stack>
                    </CardActions>
                </Container>
            </Card>
        </form>
    )
}

export default Login;