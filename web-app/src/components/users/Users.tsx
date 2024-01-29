import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {UserProps} from "../../types/User.type.ts";
import {List, ListItem, Paper, Typography} from "@mui/material";


const Users = () => {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get("http://localhost:8080/users/");
            setUsers(response.data);
            setLoading(false);
        }

        fetchData()
            .catch(error => {
                console.log(error)
                setLoading(false);
            });

    }, []);

    return (
        <Fragment>
            {
                loading ? (
                    <>
                        <Typography variant={"h3"} color={"blue"}> Loading .....</Typography>
                    </>) : (
                    <List sx={{mt: 2, width: "30%"}}>
                        {
                            users.map((user) =>
                                <ListItem key={user.id}>
                                    <Paper sx={{padding: 2}}>
                                        <Typography variant={"h6"} color={"blue"}>
                                            Id: {user.id}
                                        </Typography>

                                        <Typography sx={{mt: 2}} variant={"h6"} color={"blue"}>
                                            Email:{user.email}
                                        </Typography>
                                    </Paper>
                                </ListItem>
                            )
                        }
                    </List>
                )}
        </Fragment>
    );

}

export default Users;