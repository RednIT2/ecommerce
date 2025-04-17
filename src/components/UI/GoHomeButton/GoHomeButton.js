import React from "react";
import "./GoHomeButton.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export function GoHomeButton() {
    return (
        <NavLink to="/" className="btn btn-primary mb-3">
            <HomeIcon />
        </NavLink>
    );
}