import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from "./Post.module.css";

const post = (props) => {
    return(
        <div className={classes.post} onClick={props.clicked}>
            <FontAwesomeIcon size="3x" icon="paw"/>
            <p>Click the paw to leave your tweet</p>
        </div>
    )
}

export default post;