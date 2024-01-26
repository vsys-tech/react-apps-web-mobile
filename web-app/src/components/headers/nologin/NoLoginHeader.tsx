import {AppBar, Stack, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";


const NoLoginHeader = () => {

    return (
        <AppBar position={"static"}
                color={"secondary"}>
                <Toolbar>
                    <Stack direction={"row"} spacing={2}>
                        <NavLink style={{ textDecoration: "none"}} to={""}>
                            <Typography color={"white"}
                                        variant={"body2"}>
                                Home
                            </Typography>
                        </NavLink>
                        <NavLink style={{ textDecoration: "none"}} to={"/login"}>
                            <Typography color={"white"}
                                        variant={"body2"}>
                                Login
                            </Typography>
                        </NavLink>
                    </Stack>
                </Toolbar>
        </AppBar>
    )
}

export default NoLoginHeader;