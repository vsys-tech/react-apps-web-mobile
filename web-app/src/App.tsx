import {Fragment} from 'react'
import {Container} from "@mui/material";
import NoLoginHeader from "./components/headers/nologin/NoLoginHeader.tsx";
import Home from "./components/home/Home.tsx";
import Login from "./components/login/Login.tsx";
import {Route, Routes} from "react-router-dom";
import Users from "./components/users/Users.tsx";


function App() {

    return (
        <Fragment>
            <Container maxWidth={"lg"}>
                <NoLoginHeader/>
                <Routes>
                    <Route
                        path={''}
                        element={<Home />}/>
                    <Route
                        path={'/home'}
                        element={<Home />}/>
                    <Route
                        path={'/users'}
                        element={<Users />}/>

                    <Route
                        path={'/login'}
                        element={<Login />}/>
                </Routes>
            </Container>
        </Fragment>
    )
}

export default App
