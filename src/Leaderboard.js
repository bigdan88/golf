/**
 * @file Leaderboard.js
 * @author Daniel Han
 * @desc This file contains the code for the Leaderboard page. It is a table that displays the top 20 players in the database.
 * @version 1.0
 * @copyright (c) 2021 Daniel Han
 */

import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { Auth, Hub } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listPlayers } from "./graphql/queries";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
        marginTop: "16px",
    },
    form: {
        width: "100%",
        marginTop: "16px",
    },
    submit: {
        marginTop: "16px",
    },
}));

const Leaderboard = () => {
    const [leaderboardOpen, setLeaderboardOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [users, setUsers] = useState([]);

    const handleLeaderboard = async (event) => {
        event.preventDefault();
        try {
            const leaderboardResult = await API.graphql(
                graphqlOperation(listPlayers)
            );
            console.log(leaderboardResult);
        } catch (error) {
            console.error(error);
        }
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button onClick={() => setLeaderboardOpen(!leaderboardOpen)}>
                Leaderboard
            </Button>
            {leaderboardOpen && (
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Leaderboard
                        </Typography>
                        <Typography color="textSecondary">
                            Top 20 players
                        </Typography>
                        <Typography variant="body2" component="p">
                            <DataGrid
                                rows={users}
                                columns={[
                                    { field: "id", headerName: "ID", width: 70 },
                                    {
                                        field: "username",
                                        headerName: "Username",
                                        width: 130,
                                    },
                                    {
                                        field: "email",
                                        headerName: "Email",
                                        width: 130,
                                    },
                                    {
                                        field: "phoneNumber",
                                        headerName: "Phone Number",
                                        width: 130,
                                    },
                                    {
                                        field: "score",
                                        headerName: "Score",
                                        width: 130,
                                    },
                                ]}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                                disableSelectionOnClick
                            />
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default Leaderboard;

