import React from "react";
import {Button} from "reactstrap";



const postInput = (props) => {
    return(
        <div>
            <textarea id="post" name="post" rows="5" cols="33" placeholder="Write your post here, once done click the backdrop..." />
            <div>
                <Button onClick={props.clicked}>Submit</Button>
            </div>
        </div>
        
        )

}


export default postInput;