import React, {Component} from "react";

import Namecard from "../../components/Sidebar/Namecard/Namecard";
import Location from "../../components/Sidebar/Location/Location";
import Post from "../../components/Post/Post";
import Modal from "../../components/Modal/Modal";
import Body from "../../components/BodyPage/BodyPage";
import PostInput from "../../components/PostInput/PostInput";

class MainPage extends Component {

    state = {
        post: false
    }

    postCancelHandler = () => {
        this.setState( { post: false } );
        alert('Your tweet is posted!');
    }

    postClickHandler = () => {
        this.setState( { post: true } ); 
    }

    render () {        

        return(
            <div>
                
                <Namecard />
                <Location />
                <Body />
                <Post clicked = {this.postClickHandler}/>
                <Modal show={this.state.post} modalClosed={this.postCancelHandler}>
                    <PostInput clicked={this.postCancelHandler}/>
                </Modal>
            </div>
        )
    }
}

export default MainPage;