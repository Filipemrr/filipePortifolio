import {Grid} from "@mui/material";
import React from "react";

export default function NavBar(){
    return(
        <Grid item md={12} className="title-bar">
            <div className="title-bar-text">Filipe Raposo - Profile</div>
            <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
            </div>
        </Grid>)
}